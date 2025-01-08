import { Component } from '@angular/core';
import {UserStory} from "../../../model/UserStory";

@Component({
  selector: 'app-user-experience-page',
  templateUrl: './user-experience-page.component.html',
  styleUrls: ['./user-experience-page.component.css']
})
export class UserExperiencePageComponent {
  persona = {
    name: "Iolanda",
    occupation: "HR specialist in a corporation",
    age:"34 years",
    status:"Divorced, 2 children",
    motivation: {
      Familie: "The 2 little girls are the most important for Iolanda and she wishes to provide them a happy life," +
        " even without a father figure",
      Ambitie: "Iolanda is an ambitious woman, who will never accept that a woman's role is only to take care of the" +
        " kids and do house chores. A woman can be a mother and a CEO in the same time!",
      Ecologie: "Part of the education she gave to her daughters is that the Earth is our home and we shouldn't abuse" +
        " its resources. So, she prefers to buy second hand products most of the times, to not encourage resource waste."
    },
    about:[
      "She spends most of her time with the family, when she isn't at work.",
      "She is an active and well-organized. When not working, she spends time with her girls organizing fun" +
      "activities. When her kids are not home, she likes to take different courses on self-improvement.",
      "She likes to be up to date with the world, from technology to political trends.",
    ],
    needs: [
      "Wishes for a greater income, to ensure her girls a decent living.",
      "She needs constant challenges in her life."
    ]
  }

  interviewUserStory = {
    age: 24,
    gender: "male",
    status: "hired, full-time software developer",
    passions: "entrepreneurship",
    userStory: new UserStory(
        1,
        "His working environment requires the appropriate tools such as a performing desktop, " +
        "a mobile phone for multitasking, and a fitting desk for his entire setup for a good price."
    ),
  }

  userStories: UserStory[] = [
    new UserStory(
      1,
      "Iolanda wishes to start a financial consultancy company, but she requires pieces of furniture and" +
      " technology equipment. She doesn't want to invest too much, therefore she would like to find second hand" +
      " products that should work as the original models."
    ),
    new UserStory(
      2,
      "The little daughter, together with family's orange cat are not the most careful when talking about" +
      "fragile things, so Iolanda needs to constantly change things in her apartment."
    ),
    new UserStory(
      3,
      "Iolanda had incidents with individual sellers on different websites, therefore she is looking for a " +
      "website which should act as an entity between buyer and seller, that should be more credible."
    ),
    new UserStory(
      4,
      "Iolanda noticed what happens when items from her company are replaced. She cannot buy more than 2" +
      "products, even though she wished to."
    )
  ]
}
