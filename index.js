const MATERIAL_IRON_INGOT_ID = "IRON-INGOT";
const MATERIAL_STICK_ID = "STICK";
const MATERIAL_AIR_ID = "";
const MATERIAL_BOW_ID = "BOW";
const MATERIAL_DIAMOND_ID = "DIAMOND";
const MATERIAL_STRING_ID = "STRING";
const MATERIAL_OAKLOG_ID = "OAKLOG";
const MATERIAL_OAKPLANKS_ID = "OAKPLANKS";
const MATERIAL_ENCHANTED_BOOKS_ID = "ENCHANTED_BOOK";
const MATERIAL_DIAMOND_PICKAXE_ID = "DIAMOND_PICKAXE";
// const MATERIAL_ENCHANTED_DIAMOND_PICKAXE_ID = "ENCHANTED_DIAMOND_PICKAXE"

const MATERIAL_AIR_IMG = "./assets/air.webp";
const MATERIAL_IRON_INGOT_IMG = "./assets/iron-ingot.webp";
const MATERIAL_STICK_IMG = "./assets/stick.webp";
const MATERIAL_BOW_IMG = "./assets/bow.webp";
const MATERIAL_DIAMOND_IMG = "./assets/diamond.webp";
const MATERIAL_STRING_IMG = "./assets/string.webp";
const MATERIAL_OAKLOG_IMG = "./assets/oaklog.webp";
const MATERIAL_OAKPLANKS_IMG = "./assets/oakplanks.webp";
const MATERIAL_ENCHANTED_BOOKS_IMG = "./assets/enchanted_book.webp";
const MATERIAL_DIAMOND_PICKAXE_IMG = "./assets/diamond_pickaxewebp.webp"
// const MATERIAL_ENCHANTED_DIAMOND_PICKAXE_IMG = "./assets/enchanted_diamond_pickaxe.webp"

const materials = [
	MATERIAL_AIR_ID,
	MATERIAL_IRON_INGOT_ID,
	MATERIAL_STICK_ID,
	MATERIAL_DIAMOND_ID,
	MATERIAL_STRING_ID,
	MATERIAL_OAKLOG_ID,
	MATERIAL_OAKPLANKS_ID,
	MATERIAL_ENCHANTED_BOOKS_ID,
	MATERIAL_DIAMOND_PICKAXE_ID,
];

const materialsImageSrc = [
	MATERIAL_AIR_IMG,
	MATERIAL_IRON_INGOT_IMG,
	MATERIAL_STICK_IMG,
	MATERIAL_DIAMOND_IMG,
	MATERIAL_STRING_IMG,
	MATERIAL_OAKLOG_IMG,
	MATERIAL_OAKPLANKS_IMG,
	MATERIAL_ENCHANTED_BOOKS_IMG,
	MATERIAL_DIAMOND_PICKAXE_IMG,
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
const stickRecipe = [
	MATERIAL_AIR_ID,
	MATERIAL_OAKPLANKS_ID,
	MATERIAL_AIR_ID,
	MATERIAL_AIR_ID,
	MATERIAL_OAKPLANKS_ID,
	MATERIAL_AIR_ID,
	MATERIAL_AIR_ID,
	MATERIAL_AIR_ID,
	MATERIAL_AIR_ID,
];
const oakplanksRecipe = [
	MATERIAL_AIR_ID,
	MATERIAL_AIR_ID,
	MATERIAL_AIR_ID,
	MATERIAL_AIR_ID,
	MATERIAL_OAKLOG_ID,
	MATERIAL_AIR_ID,
	MATERIAL_AIR_ID,
	MATERIAL_AIR_ID,
	MATERIAL_AIR_ID,
];
const enchantedDiamondPickaxeRecipe = [
	MATERIAL_AIR_ID,
	MATERIAL_AIR_ID,
	MATERIAL_AIR_ID,
	MATERIAL_AIR_ID,
	MATERIAL_DIAMOND_PICKAXE_ID,
	MATERIAL_ENCHANTED_BOOKS_ID,
	MATERIAL_AIR_ID,
	MATERIAL_AIR_ID,
	MATERIAL_AIR_ID,
];

// const ??? = [
// 	MATERIAL_AIR_ID,
// 	MATERIAL_AIR_ID,
// 	MATERIAL_AIR_ID,
// 	MATERIAL_AIR_ID,
// 	MATERIAL_AIR_ID,
// 	MATERIAL_AIR_ID,
// 	MATERIAL_AIR_ID,
// 	MATERIAL_AIR_ID,
// 	MATERIAL_AIR_ID,
// ];
// const ??? = [
// 	MATERIAL_AIR_ID,
// 	MATERIAL_AIR_ID,
// 	MATERIAL_AIR_ID,
// 	MATERIAL_AIR_ID,
// 	MATERIAL_AIR_ID,
// 	MATERIAL_AIR_ID,
// 	MATERIAL_AIR_ID,
// 	MATERIAL_AIR_ID,
// 	MATERIAL_AIR_ID,
// ];
// const ??? = [
// 	MATERIAL_AIR_ID,
// 	MATERIAL_AIR_ID,
// 	MATERIAL_AIR_ID,
// 	MATERIAL_AIR_ID,
// 	MATERIAL_AIR_ID,
// 	MATERIAL_AIR_ID,
// 	MATERIAL_AIR_ID,
// 	MATERIAL_AIR_ID,
// 	MATERIAL_AIR_ID,
// ];
// const ??? = [
// 	MATERIAL_AIR_ID,
// 	MATERIAL_AIR_ID,
// 	MATERIAL_AIR_ID,
// 	MATERIAL_AIR_ID,
// 	MATERIAL_AIR_ID,
// 	MATERIAL_AIR_ID,
// 	MATERIAL_AIR_ID,
// 	MATERIAL_AIR_ID,
// 	MATERIAL_AIR_ID,
// ];


const oakplanksRecipeImageSrc = "./assets/oakplanks.webp";
const pickaxeRecipeImageSrc = "./assets/iron-pickaxe.webp";
const axeRecipeImageSrc = "./assets/iron-axe.webp";
const stickRecipeImageSrc = "./assets/stick.webp";
const enchantedDiamondPickaxeImageSrc = "./assets/enchanted_diamond_pickaxe.webp"

const recipeList = [
	pickaxeRecipe,
	axeRecipe, 
	stickRecipe,
	oakplanksRecipe,
	enchantedDiamondPickaxeRecipe,
];

const recipeImageSrcList = [
	pickaxeRecipeImageSrc,
	axeRecipeImageSrc,
	stickRecipeImageSrc,
	oakplanksRecipeImageSrc,
	enchantedDiamondPickaxeImageSrc,
];

const craftingTable = ["", "", "", "", "", "", "", "", ""];
const inventoryTable = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const result = document.getElementById("result-slot");

const craft = document.querySelectorAll(".crafting-slot");
const inventoryElement = document.querySelector(".inventory-container");
const imgCaseResult = document.querySelector("#imgCaseResult");

let selectedMaterialImgSrc = "";
let selectedButton = null;
let pipette = "";

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
		if (pipette === materialName && selectedButton === newButton) {
			pipette = "";
			selectedMaterialImgSrc = "";
			selectedButton.classList.remove("selected");
		} else {
			if (selectedButton !== null) {
				selectedButton.classList.remove("selected");
			}
			pipette = materialName;
			selectedMaterialImgSrc = materialsImgSrc;

			selectedButton = newButton;
			selectedButton.classList.add("selected");
		}
		console.log(pipette, verify(pickaxeRecipe, craftingTable), selectedButton);
	});
	inventoryElement.appendChild(newButton);
}

function verify(table1, table2) {
	for (let i = 0; i < table1.length; i++) {
		if (table1[i] !== table2[i]) {
			return false;
		}
	}

	return true;
}

for (let i = 0; i < craft.length; i++) {
	const craftSlot = craft[i];

	craftSlot.addEventListener("click", () => {
		const newImage = craftSlot.firstElementChild;

		if (newImage == null) return;

		newImage.src = selectedMaterialImgSrc;
		newImage.alt = pipette;

		craftingTable[i] = pipette;

		console.log(craftingTable, pickaxeRecipe);

		for (let i = 0; i < recipeList.length; i++) {
			const isValid = verify(recipeList[i], craftingTable);
			if (isValid != false) {
				imgCaseResult.src = recipeImageSrcList[i];
				imgCaseResult.alt = "outil";
				break;
			} else {
				imgCaseResult.src = MATERIAL_AIR_IMG;
				imgCaseResult.alt = MATERIAL_AIR_ID;
			}
		}

		console.log(craftSlot);
		console.log(verify(pickaxeRecipe, craftingTable));
	});
}
