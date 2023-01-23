const inputElement = document.querySelector("input");
const modelElement = document.querySelector("model-viewer#cube");
const frame = document.querySelector("#frame");

const products = [
  {
    id: 0,
    texture: "./textures/Default.png",
    name: "Default",
    type: "",
    size_x: 1,
    size_y: 1,
    size_z: 1,
  },
  {
    id: 1,
    texture: "./textures/air_purifier/Viktor SF-V-001.png",
    name: "Stadler form",
    type: "Air Purifier",
    size_x: 1,
    size_y: 1.83,
    size_z: 1,
  },
  {
    id: 2,
    texture: "./textures/air_purifier/XIAOMI Air Purifier 4 Lite.png",
    name: "XIAOMI Air Purifier",
    type: "Air Purifier",
    size_x: 1,
    size_y: 2.22,
    size_z: 1,
  },
  {
    id: 3,
    texture: "./textures/microwave/ELECTROLUX Microwave 700W 20L EMM2025MX.png",
    name: "ELECTROLUX Microwave 700W",
    type: "Microwave",
    size_x: 1.73,
    size_y: 1,
    size_z: 1.26,
  },
  {
    id: 4,
    texture:
      "./textures/microwave/ELECTROLUX  Microwave 800W 23L Black EMM2334GK.png",
    name: "ELECTROLUX Microwave 800W",
    type: "Microwave",
    size_x: 1.66,
    size_y: 1,
    size_z: 1.35,
  },
  {
    id: 5,
    texture:
      "./textures/microwave/ELECTROLUX UltimateTaste 700 2000W 56L Black EOT5622XFG.png",
    name: "ELECTROLUX UltimateTaste 700",
    type: "Microwave",
    size_x: 1.57,
    size_y: 1,
    size_z: 1.24,
  },
  {
    id: 6,
    texture: "./textures/refrigerator/LG GC-J257CQES.AMCPLMT.png",
    name: "LG GC-J257CQES",
    type: "Refrigerator",
    size_x: 2.5,
    size_y: 6.1,
    size_z: 3.1,
  },
  {
    id: 7,
    texture: "./textures/refrigerator/SAMSUNG RT20HAR1DSA_ST.png",
    name: "SAMSUNG RT20HAR1DSA",
    type: "Refrigerator",
    size_x: 2.875,
    size_y: 6.5,
    size_z: 2.5,
  },
  {
    id: 8,
    texture: "./textures/refrigerator/TOSHIBA GR-B22KP(BG).png",
    name: "TOSHIBA GR-B22KP Refrigerator",
    type: "Refrigerator",
    size_x: 2.85,
    size_y: 5.9,
    size_z: 2.5,
  },
  {
    id: 9,
    texture: "./textures/tv/LG 55UQ9000 UHD LED Texture.png",
    name: "LG TV 55UQ9000",
    type: "TV",
    size_x: 4.3,
    size_y: 2.49,
    size_z: 0.2,
  },
  {
    id: 10,
    texture: "./textures/tv/LG 65UQ8050 UHD LED Texture.png",
    name: "LG TV 65UQ8050",
    type: "TV",
    size_x: 5.04,
    size_y: 2.90,
    size_z: 0.2,
  },
  {
    id: 11,
    texture:
      "./textures/tv/Samsung Q900R QLED Smart 8K UHD TV 82 inch Texture.png",
    name: "Samsung TV Q900R QLED",
    type: "TV",
    size_x: 10.55,
    size_y: 6.07,
    size_z: 0.2,
  },
  {
    id: 12,
    texture: "./textures/tv/Samsung QN85A Neo QLED 65 inch Texture.png",
    name: "Samsung QN85A",
    type: "TV",
    size_x: 10.75,
    size_y: 6.17,
    size_z: 0.2,
  },
  {
    id: 13,
    texture: "./textures/tv/SONY BRAVIA XR 75X90K Texture.png",
    name: "SONY TV BRAVIA XR 75X90K",
    type: "TV",
    size_x: 4.59,
    size_y: 2.64,
    size_z: 0.2,
  },
  {
    id: 14,
    texture: "./textures/tv/SONY BRAVIA XR 77A80K UHD OLED Texture.png",
    name: "SONY TV BRAVIA XR 77A80K",
    type: "TV",
    size_x: 6.38,
    size_y: 3.7,
    size_z: 0.2,
  },
  {
    id: 15,
    texture: "./textures/washing_machine/ELECTROLUX EWW9024P5WB.png",
    name: "ELECTROLUX EWW9024P5WB",
    type: "Washing Machine",
    size_x: 2.08,
    size_y: 2.96,
    size_z: 2,
  },
  {
    id: 16,
    texture: "./textures/washing_machine/LG FV1450S3V.ASSPETH.png",
    name: "LG FV1450S3V",
    type: "Washing Machine",
    size_x: 2.14,
    size_y: 3.04,
    size_z: 2,
  },
  {
    id: 17,
    texture: "./textures/washing_machine/SAMSUNG WW12TP44DSX_ST.png",
    name: "SAMSUNG WW12TP44DSX",
    type: "Washing Machine",
    size_x: 2,
    size_y: 2.84,
    size_z: 2.16,
  },
];

const x = document.querySelector("#x");
const y = document.querySelector("#y");
const z = document.querySelector("#z");

const defaultScale = 1;

frame.addEventListener("click", () => {
  modelElement.updateFraming();
});

const updateScale = () => {
  modelElement.scale = `${x.value} ${y.value} ${z.value}`;
};

x.addEventListener("input", () => {
  updateScale();
});
y.addEventListener("input", () => {
  updateScale();
});
z.addEventListener("input", () => {
  updateScale();
});

//for select
let options = products.map(function (product) {
  let option = document.createElement("option");
  option.innerHTML = product.name;
  option.value = product.texture;
  return option;
});

let select = document.getElementById("texture");
options.forEach(function (option) {
  select.appendChild(option);
});

modelElement.addEventListener("load", () => {
  const material = modelElement.model.materials[0];
  const createAndApplyTexture = async (channel, event) => {
    const texture = await modelElement.createTexture(event.target.value);
    if (channel.includes("base") || channel.includes("metallic")) {
      material.pbrMetallicRoughness[channel].setTexture(texture);
    } else {
      material[channel].setTexture(texture);
    }
  };
  document.querySelector("#texture").addEventListener("input", (event) => {
    console.log(event);
    createAndApplyTexture("baseColorTexture", event);
  });
});

var value = document.getElementById("texture");
var scale_x = document.getElementById("x");
var scale_y = document.getElementById("y");
var scale_z = document.getElementById("z");
var checked = false;

function myFunction() {
  var index = value.selectedIndex;
  //   console.log(value.options[index].text);
  var checkBox = document.getElementById("autoCheck");
  var suggest_text = "size of model is x: ";
  for (let i = 0; i < products.length; i++) {
    console.log(products[i]);
    if (products[i].id == index) {
      if (checkBox.checked == true) {
        modelElement.scale = `${products[i].size_x*defaultScale} ${products[i].size_y*defaultScale} ${products[i].size_z*defaultScale}`;
        scale_x.value = products[i].size_x;
        scale_y.value = products[i].size_y;
        scale_z.value = products[i].size_z;
      } else {
        modelElement.scale = `${1*defaultScale} ${1*defaultScale} ${1*defaultScale}`;
        scale_x.value = 1;
        scale_y.value = 1;
        scale_z.value = 1;
      }
      console.log(products[i].size_x, products[i].size_y, products[i].size_z);
      var product_type = "Product type: " + products[i].type;
      var suggest_text =
        "Product Size: " +
        products[i].size_x +
        " y: " +
        products[i].size_y +
        " z: " +
        products[i].size_z;
      if (index == 0) {
        document.getElementById("product_type").innerHTML = "";
        document.getElementById("size_suggest").innerHTML = "";
      } else {
        document.getElementById("product_type").innerHTML = product_type;
        document.getElementById("size_suggest").innerHTML = suggest_text;
      }
    }
  }
}

function autoScaling() {
  var checkBox = document.getElementById("autoCheck");
  var size_suggest = document.getElementById("size_suggest");
  var manual_scaling = document.getElementById("manual_scaling");
  if (checkBox.checked == true) {
    myFunction();
    size_suggest.style.display = "none";
    manual_scaling.style.display = "none";
  } else {
    size_suggest.style.display = "block";
    manual_scaling.style.display = "flex";
  }
}
