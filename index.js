const MATERIAL_IRON_INGOT_ID = "IRON-INGOT";
const MATERIAL_STICK_ID = "STICK";
const MATERIAL_diamond_INGOT_ID = "diamond-INGOT";
const MATERIAL_netherite_INGOT_ID = "netherite-INGOT";
const MATERIAL_AIR_ID = "";

const MATERIAL_AIR_IMG = "./assets/air.webp";
const MATERIAL_IRON_INGOT_IMG = "./assets/iron-ingot.webp";
const MATERIAL_diamond_INGOT_IMG = "./assets/diams.png";
const MATERIAL_netherite_INGOT_IMG = "./assets/netherite.png";
const MATERIAL_STICK_IMG = "./assets/stick.webp";

const materials = [
	MATERIAL_AIR_ID,
	MATERIAL_IRON_INGOT_ID,
	MATERIAL_STICK_ID,
	MATERIAL_diamond_INGOT_ID,
	MATERIAL_netherite_INGOT_ID,
];
const materialsImageSrc = {
	[MATERIAL_AIR_ID]: MATERIAL_AIR_IMG,
	[MATERIAL_IRON_INGOT_ID]: MATERIAL_IRON_INGOT_IMG,
	[MATERIAL_STICK_ID]: MATERIAL_STICK_IMG,
	[MATERIAL_diamond_INGOT_ID]: MATERIAL_diamond_INGOT_IMG,
	[MATERIAL_netherite_INGOT_ID]: MATERIAL_netherite_INGOT_IMG,
};

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
const inventoryTable = [1, 2, 3, 4];

function generateInventoryBoxes() {
	let inventoryHTML =
		'<div style="display: flex; flex-direction: row; gap: 10px; margin-left: 20px;" class="divInv">';

	inventoryTable.forEach((materialId) => {
		const materialSrc =
			materialsImageSrc[materials[materialId]] || MATERIAL_AIR_IMG;
		const materialAlt = materials[materialId] || "Air";

		inventoryHTML += `
      <div style="
        width: 100px;
        height: 100px;
        border: 1px solid #ccc;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #888;">
        <img src="${materialSrc}" alt="${materialAlt}" style="width: 80%; height: 80%;" class="imgInventaire">
      </div>`;
	});

	inventoryHTML += "</div>";
	document.body.innerHTML += inventoryHTML;
}

document.addEventListener("DOMContentLoaded", function () {
	generateInventoryBoxes();

	const inventoryImages = document.querySelectorAll(".imgInventaire");
	const craftingButtons = document.querySelectorAll(".CraftingTable");

	let selectedMaterialId = null;

	inventoryImages.forEach((image, index) => {
		image.addEventListener("click", function () {
			inventoryImages.forEach((img) => {
				img.classList.remove("testClick");
			});
			image.classList.add("testClick");

			selectedMaterialId = materials[index + 1];
		});
	});

	craftingButtons.forEach((button, index) => {
		button.addEventListener("click", function () {
			if (selectedMaterialId !== null) {
				button.style.backgroundImage = `url(${materialsImageSrc[selectedMaterialId]})`;
				button.style.backgroundSize = "cover";
				button.setAttribute("data-material-id", selectedMaterialId);
			} else if (button.getAttribute("data-material-id") !== "") {
				button.style.backgroundImage = `url(${MATERIAL_AIR_IMG})`;
				button.setAttribute("data-material-id", "");
			}
		});
	});

	document.addEventListener("click", function (event) {
		const isClickInsideInventory = event.target.closest(".divInv");
		const isClickInsideCraftingTable = event.target.closest(".CraftingTable");

		if (!isClickInsideInventory && !isClickInsideCraftingTable) {
			inventoryImages.forEach((img) => img.classList.remove("testClick"));
			selectedMaterialId = null;
		}
	});
});
