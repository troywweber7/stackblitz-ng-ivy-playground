import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  readonly newButtonImage =
    "https://cdn.pixabay.com/photo/2016/10/10/01/49/plus-1727487__340.png";
  visibleButtons = [
    {
      image:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/44dc8870-2a31-4ffe-a3b8-e3132a11d974/d9td5j6-d68ffb76-ec23-453f-a65a-5329540639e0.png",
      text: "NES"
    }
  ];
  buttons = [
    {
      image:
        "https://cdn2.iconfinder.com/data/icons/gaming-8/512/Nintendo_controller-512.png",
      text: "SNES"
    },
    {
      image:
        "https://cdn1.iconfinder.com/data/icons/gamepads-2/100/gamepads_n64-512.png",
      text: "N64"
    },
    {
      image:
        "https://img.icons8.com/color/452/nintendo-gamecube-controller.png",
      text: "GameCube"
    },
    {
      image: "https://static.thenounproject.com/png/1593371-200.png",
      text: "Wii"
    },
    {
      image:
        "https://images.cellphonerepair.com/wp-content/uploads/2016/11/nintendo-wii-u-image-1.png",
      text: "Wii U"
    },
    {
      image:
        "https://i.pinimg.com/originals/e9/40/cb/e940cbc391be495e6b75ddd1ef76c545.png",
      text: "Switch"
    },
    {
      image:
        "https://estadioretro.be/videojuegos/wp-content/uploads/2020/10/gameboy_icon.png",
      text: "GameBoy"
    },
    {
      image: "https://static.thenounproject.com/png/44993-200.png",
      text: "GBC"
    },
    {
      image:
        "https://www.freeiconspng.com/thumbs/gameboy-icon/gameboy-icon-5.png",
      text: "GBA"
    },
    {
      image: "https://static.thenounproject.com/png/222862-200.png",
      text: "GBA SP"
    },
    {
      image:
        "https://cdn2.iconfinder.com/data/icons/the-evolution-of-consoles-game/64/3Ds_console_game_evolution_copy-512.png",
      text: "NDS"
    },
    {
      image:
        "https://images-na.ssl-images-amazon.com/images/I/811Ap7oY41L._AC_SL1500_.jpg",
      text: "3DS"
    }
  ];

  newButton() {
    if (this.buttons.length) this.visibleButtons.push(this.buttons.pop());
  }

  removeButton(index: number) {
    const button = this.visibleButtons.splice(index, 1)[0];
    this.buttons.push(button);
    return false;
  }
}
