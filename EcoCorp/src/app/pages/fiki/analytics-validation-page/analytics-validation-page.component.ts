import { Component } from '@angular/core';

@Component({
  selector: 'app-analytics-validation-page',
  templateUrl: './analytics-validation-page.component.html',
  styleUrls: ['./analytics-validation-page.component.css']
})
export class AnalyticsValidationPageComponent {
  report_images: any[] = [
    {
      src: "./assets/fiki-analytics-report/Report_1.png",
      alt: "New users",
      text: "The amount of new users had a spike at the end of last year, but then went to a constant of 5 new people " +
        "in the next month which means that the app in incipient phase brings some interest."
    },
    {
      src: "./assets/fiki-analytics-report/Report_2.png",
      alt: "Average Time Management",
      text: "The average engagement time, it further depicts the user's level of interest which spiked at the end of the last " +
        "year, went to normal and then started an ascending trend"
    },
    {
      src: "./assets/fiki-analytics-report/Report_3.png",
      alt: "New users by default channel group",
      text: "The metric shows a distribution of the sources from which new users accessed to our website."
    },
    {
      src: "./assets/fiki-analytics-report/Report_4.png",
      alt: "Users by country",
      text: "The distribution of users by country."
    },
    {
      src: "./assets/fiki-analytics-report/Report_5.png",
      alt: "User activity over time",
      text: "The user activity over time shows how much he interacted with the landing page and overall acativity is on " +
        "an ascending trend"
    },
    {
      src: "./assets/fiki-analytics-report/Report_6.png",
      alt: "Heat map",
      text: "The heatmap from the landing page shows that most of the new users will scroll until the second section and " +
        "then leave the website, but half of the users would scroll until the end of the page, so this might show some " +
        "level of interest."
    },
    {
      src: "./assets/fiki-analytics-report/Report_7.png",
      alt: "Heat map",
      text: "The heatmap from the landing page shows that most of the new users will scroll until the second section and " +
        "then leave the website, but half of the users would scroll until the end of the page, so this might show some " +
        "level of interest."
    },
    {
      src: "./assets/fiki-analytics-report/Report_8.png",
      alt: "Heat map",
      text: "The heatmap from the landing page shows that most of the new users will scroll until the second section and " +
        "then leave the website, but half of the users would scroll until the end of the page, so this might show some " +
        "level of interest."
    },
    {
      src: "./assets/fiki-analytics-report/Report_9.png",
      alt: "Heat map",
      text: "The heatmap from the landing page shows that most of the new users will scroll until the second section and " +
        "then leave the website, but half of the users would scroll until the end of the page, so this might show some " +
        "level of interest."
    },
  ]

  post_images : any[] = [
    {
      src: "./assets/posts-screenshots/Facebook.png",
      alt:"Facebook Page",
      title: "Facebook page",
      link: "https://www.facebook.com/profile.php?id=61553893934922"
    },
    {
      src: "./assets/posts-screenshots/Instagram.png",
      alt: "Instagram Page",
      title: "Instagram page",
      link: "https://instagram.com/ecocorpmarketplace?igshid=OGQ5ZDc2ODk2ZA=="
    },
    {
      src: "./assets/posts-screenshots/Reclama.jpg",
      alt: "Ads",
      title: "Ads"
    },
  ]

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];
}
