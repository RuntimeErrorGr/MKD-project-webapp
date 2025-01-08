import {Component, OnInit} from '@angular/core';
import * as XLSX from "xlsx";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-mvp-page',
  templateUrl: './mvp-page.component.html',
  styleUrls: ['./mvp-page.component.css']
})
export class MVPPageComponent implements OnInit{
  constructor(private http: HttpClient) {}

  customerData: any[] = []
  customerExcelURL = 'https://docs.google.com/spreadsheets/d/1L3j7EqKy-zpF_KckOd6BJZVRztHvzH8NqpEZEKHAv0M/edit?resourcekey#gid=1781087461'
  colors = [
    '--blue-500', '--yellow-500', '--green-500', '--red-500', '--primary-900', '--orange-500', '--indigo-500',
    '--bluegray-500', '--gray-500', '--teal-500'
  ]

  convertHashMapToData(hashmap: any): any[] {
    const documentStyle = getComputedStyle(document.documentElement);
    let dataset: any[] = [];

    Object.entries(hashmap).forEach(([, value]: [string, any]) => {
      let dataEntry = {
        question: value.question,
        data: {
          labels: [] as string[],
          datasets: [{
            data: [] as string[],
            backgroundColor: [] as string[],
            hoverBackgroundColor: [] as string[]
          }]
        },
        options: {
          responsive: false,
          maintainAspectRatio: false
        }
      }

      let i = 0
      Object.entries(value.answers).forEach(([subKey, subValue]: [string, any]) => {
        dataEntry.data.labels.push(subKey);
        dataEntry.data.datasets[0].data.push(subValue)
        dataEntry.data.datasets[0].backgroundColor.push(documentStyle.getPropertyValue(this.colors[i]))
        dataEntry.data.datasets[0].hoverBackgroundColor.push(documentStyle.getPropertyValue(this.colors[i]))
        i = (i + 1) % 10
      })

      dataset.push(dataEntry)
    })

    return dataset;
  }

  getAnswersFromExcelSheet(url: string): Promise<any[]> {
    return new Promise((resolve, reject) => {
      const sortedAnswers: any = {}

      this.http.get(url, {responseType: 'arraybuffer'}).subscribe({
        next: (data => {
          const bufferData = data;
          const array = new Uint8Array(bufferData);
          const workbook = XLSX.read(array, {type: 'array'});
          let jsonData: any = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);

          jsonData.forEach((row: {}) => {
            if ('C' in row) {
              if (jsonData.indexOf(row) === 0) {
                Object.entries(row).forEach(([key, value]: [string, any]) => {
                  if (key !== 'A' && key !== 'B' && key !== '__EMPTY') {
                    sortedAnswers[key] = {question: value, answers: {}};
                  }
                });
              } else {
                Object.entries(row).forEach(([key, value]: [string, any]) => {
                  if (key !== 'A' && key !== 'B' && key !== '__EMPTY') {
                    sortedAnswers[key].answers.hasOwnProperty(value) ?
                      sortedAnswers[key].answers[value]++ :
                      sortedAnswers[key].answers[value] = 1;
                  }
                });
              }
            }
          });

          resolve(this.convertHashMapToData(sortedAnswers))
        }),

        error: ((error) => {
          console.error('Error fetching Excel file:', error);
          reject(error)
        })
      })
    })
  }

  async ngOnInit() {
    await this.getAnswersFromExcelSheet(this.customerExcelURL).then(data => this.customerData = data)
  }
}
