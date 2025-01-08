import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import * as XLSX from 'xlsx';
import {QA} from "../../../model/QA";

@Component({
  selector: 'app-customer-discovery-page',
  templateUrl: './customer-discovery-page.component.html',
  styleUrls: ['./customer-discovery-page.component.css']
})
export class CustomerDiscoveryPageComponent implements OnInit{
  constructor(private http: HttpClient) {}

  clientData: any[] = []
  businessData: any[] = []
  clientExcelURL = 'https://docs.google.com/spreadsheets/d/1qX8-imRqy6LinUeY7_O4_qCVm2J_EM6rX2l8wka9sC0/edit#gid=993286460'
  businessExcelURL = 'https://docs.google.com/spreadsheets/d/10Wx0evRjxgaZS3HZM1-8XxR_mh9TJmrr04t2NPIgCUs/edit?resourcekey#gid=1849580402'
  colors = [
    '--blue-500', '--yellow-500', '--green-500', '--red-500', '--primary-900', '--orange-500', '--indigo-500',
    '--bluegray-500', '--gray-500', '--teal-500'
  ]
  QASection: QA[] = [
    new QA(
      'How did we discover our customer segment?',
      'Firstly, there are the companies and in order to find those interested in selling their equipment, we ' +
      'focused on those that are constantly updating their equipment or that have excess items in their inventory. ' +
      'It also helped to take a look at the competitors to see what kind of customers they are targeting. Secondly,' +
      'for the potential buyers, the segment is much wider and less restrictive, since any person can be interested' +
      'in purchasing resold products.'
    ),

    new QA(
      'How did we split our market research?',
      'There are two courts in this scenario. On the one hand, the perspective of the seller, where we are ' +
      'interested in his attitude regarding the used equipment, which needs to be replaced. On the other hand, that ' +
      'of the buyer, where we want to find out if there is interest on the part of the customers regarding the purchase ' +
      'of used products in a larger number.'
    ),

    new QA(
      'How did we suvey people?',
      "We created two forms, one for individuals and one for legal entities. To get the opinion of the potential " +
      "customer segment we decided to use Facebook and Reddit to make the forms public. We are interested to see what the " +
      "attitude of the legal entities regarding the disposal of old equipment is, and to see if they would use a third " +
      "party to help with reselling it. Also, we are asking the individuals if they use such applications of reselling, " +
      "and what kind of products are they searching for."
    ),

    new QA(
      'What did we found after research analysis?',
      'The survey results indicated a favorable response from both client segments. Most of the potential ' +
      'sellers like the idea of getting a profit out of equipment they do not use anymore and entrusting a third-party ' +
      'to take care of the process. The potential clients are also acquainted with such applications and more than ' +
      'a half would be willing to buy more than a product in order to get a discount.'
    ),

    new QA(
      'Is our product ready for selling?',
      'To conclude, we have positive answers in our surveys that indicate to us that this product is going to ' +
      'be well received by the market.'
    )
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
    await this.getAnswersFromExcelSheet(this.clientExcelURL).then(data => this.clientData = data)
    await this.getAnswersFromExcelSheet(this.businessExcelURL).then(data => this.businessData = data)
  }
}
