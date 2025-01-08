import { Component } from '@angular/core';

@Component({
  selector: 'app-market-research-page',
  templateUrl: './market-research-page.component.html',
  styleUrls: ['./market-research-page.component.css']
})
export class MarketResearchPageComponent {
  companies_data = [
    {
      name: 'Publi24',
      img: './assets/fiki-competition/Publi24.jpg',
      data: [
        {
          year: 2022,
          turnover: '29,248,716 RON',
          netProfit: '11,262,637 RON'
        },
        {
          year: 2021,
          turnover: '27,599,473 RON',
          netProfit: '10,632,626 RON'
        },
        {
          year: 2020,
          turnover: '24,919,372 RON',
          netProfit: '7,649,044 RON'
        }
      ],
      marketShare: '10,86%',
      source: "https://termene.ro/firma/20201084-PUBLI24-DIGITAL-SRL"
    },
    {
      name: 'Olx',
      img: './assets/fiki-competition/Olx.png',
      data: [
        {
          year: 2022,
          turnover: '249,636,869 RON',
          netProfit: '71,406,189 RON'
        },
        {
          year: 2021,
          turnover: '206,510,057 RON',
          netProfit: '64,368,999 RON'
        },
        {
          year: 2020,
          turnover: '152,216,544 RON',
          netProfit: '58,864,496 RON'
        }
      ],
      marketShare: '89.52%',
      source: "https://termene.ro/firma/22457535-olx-online-services-srl"
    }
  ]

  potentialMarketShare = [
    {
      year: 2023,
      turnover: '31,609,825 RON',
      netProfit: '12,174,889 RON',
      marketShare: '10.18%',
      marketValue: '31,608,432.738 RON',
      totalMarketValue: '310,495,410 RON'
    },
    {
      year: 2024,
      turnover: '34,344,080 RON',
      netProfit: '13,223,204 RON',
      marketShare: '10.87%',
      marketValue: '34,304,717.134 RON',
      totalMarketValue: '315,590,774 RON',
    },
    {
      year: 2025,
      turnover: '37,362,217 RON',
      netProfit: '14,353,171 RON',
      marketShare: '11.63%',
      marketValue: '38,101,506.456 RON',
      totalMarketValue: '321,343,166 RON',
    },
    {
      year: 2026,
      turnover: '40,614,899 RON',
      netProfit: '15,564,408 RON',
      marketShare: '12.40%',
      marketValue: '40.624.134,140 RON',
      totalMarketValue: '327,613,985 RON',
    },
    {
      year: 2027,
      turnover: '44,147,804 RON',
      netProfit: '16,914,164 RON',
      marketShare: '13.19%',
      marketValue: '44,107,303.547 RON',
      totalMarketValue: '334,399,572 RON'
    },
  ]
}
