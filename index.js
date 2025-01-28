const MATERIAL_IRON_INGOT_ID = "IRON-INGOT";
const MATERIAL_STICK_ID = "STICK";
const MATERIAL_AIR_ID = "";

const MATERIAL_AIR_IMG = "./assets/air.webp";
const MATERIAL_IRON_INGOT_IMG = "./assets/iron-ingot.webp";
const MATERIAL_STICK_IMG = "./assets/stick.webp";

const materials = [MATERIAL_AIR_ID, MATERIAL_IRON_INGOT_ID, MATERIAL_STICK_ID];
const materialsImageSrc = [
	MATERIAL_AIR_IMG,
	MATERIAL_IRON_INGOT_IMG,
	MATERIAL_STICK_IMG,
];

const pickaxeRecipe = [
	MATERIAL_IRON_INGOT_ID,
	MATERIAL_IRON_INGOT_ID,
	MATERIAL_IRON_INGOT_ID,
	MATERIAL_AIR_ID,
	MATERIAL_STICK_ID,
	MATERIAL_AIR_ID,
	MATERIAL_AIR_ID,
	MATERIAL_STICK_ID,
	MATERIAL_AIR_ID,
];
const axeRecipe = [
	MATERIAL_IRON_INGOT_ID,
	MATERIAL_IRON_INGOT_ID,
	MATERIAL_AIR_ID,
	MATERIAL_IRON_INGOT_ID,
	MATERIAL_STICK_ID,
	MATERIAL_AIR_ID,
	MATERIAL_AIR_ID,
	MATERIAL_STICK_ID,
	MATERIAL_AIR_ID,
];

const pickaxeRecipeImageSrc = "./assets/iron-pickaxe.webp";
const axeRecipeImageSrc = "./assets/iron-axe.webp";
const recipeList = [pickaxeRecipe, axeRecipe];
const recipeImageSrcList = [pickaxeRecipeImageSrc, axeRecipeImageSrc];

const craftingTable = ["", "", "", "", "", "", "", "", ""];
const inventoryTable = [0, 1, 2];

const result = document.getElementById("result-slot");

const craft = document.querySelector(".crafting-slot");
const inventoryElement = document.querySelector(".inventory-container");

let selectedMaterialName = "";
let selectedMaterialImgSrc = "";
let selectedButton = null;

function createButtonItem(imageSrc, imageAlt) {
	const ButtonElement = document.createElement("button");
	const ImageElement = document.createElement("img");

	ButtonElement.appendChild(ImageElement);

	ButtonElement.classList.add("inventory-btn");

	ImageElement.setAttribute("src", imageSrc);
	ImageElement.setAttribute("alt", imageAlt);

	ButtonElement.appendChild(ImageElement);

	return ButtonElement;
}

for (let i = 0; i < inventoryTable.length; i++) {
	const materialNumber = inventoryTable[i];
	const materialName = materials[materialNumber];
	const materialsImgSrc = materialsImageSrc[materialNumber];

	const newButton = createButtonItem(materialsImgSrc, materialName);

	newButton.addEventListener("click", (e) => {
		if (selectedButton === newButton) {
			selectedButton.classList.remove("selected");
			selectedButton = null;
		} else {
			if (selectedButton) {
				selectedButton.classList.remove("selected");
			}

			selectedButton = newButton;
			selectedButton.classList.add("selected");
		}
	});
	inventoryElement.appendChild(newButton);
}

window.addEventListener("click", (e) => {});

main.addEventListener("click", () => {
	selectedButton.classList.remove("selected");
})





























