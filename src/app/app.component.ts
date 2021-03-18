import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  buttons = [
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/95/Playstation_icon.png",
      text: "PlayStation",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/5/55/Black_Nintendo_DS_icon.png",
      text: "Black NDS",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/7/79/White_Nintendo_DS_icon.png",
      text: "White NDS",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/5/57/Black_Sega_Mega_Drive_icon.png",
      text: "Sega MD",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d8/Black_Nintendo_64_icon.png",
      text: "N64",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/3/34/Black_Playstation_3_icon.png",
      text: "PS3",
    }
  ];
}
