//grabbing images from images folder
var imagesFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images");
	var imagesFile = imagesFolder.getDirectoryListing();



// JSON from ClientInfo
// function calling table screen fo dog breeds

var dogTable = function(){

var dogs = {
	"Breeds":{
		"theTitle": "Dog Breeds",
		"dogList": [
		{
			"dog": "Siberian Husky",
			"description": "Weight: 35-60 pounds, Height: 20-24 inches to the shoulder, Color:  Tan, White, Black, Mixed, Coat: Ranging from Short to Long, Activity level: Very High, Temperament: Mischevious but Loyal to a fault, Learning rate: Medium, Obedience: Low, Guard Ability: High, Watch Ability: High, Life Span: 12-14 years, Origin: Siberia. Appearance - Huskies come in a variety of colors and markings, from black to pure white with colored markings on the body that include reds and coppers. Their eyes can be brown, blue, or a combination. Their faces sport masks that add to their eye appeal. Temperament - This high-energy breed can be destructive both indoors and out — especially when bored or not given adequate exercise. They will demolish a house if they are left alone and there has even been a case of a Siberian Husky chewing through a cement wall. Nonetheless, they can be quite charming with their mischievous and playful nature. They are also quite social and love to show off their talents. History- The Siberian Husky is believed to have originated among the Chukchi, a tribe of Siberian nomads. The breed's history is relatively unknown but DNA tests confirm that they are among the oldest of dog breeds. We do know that the Chukchi used the dogs as fast transportation and that they interacted with the Chukchi as a family dog. Huskies often slept with the children and provided warm comfortable beds for them.",
			
		},	
		{	"dog": "Great Dane",	
			"description": "Breed:  Great Dane Weight:  100-200 pounds Height:  28-34 inches to shoulder Color: grey to black, white, mixed variations/patterns Coat: smooth short coat Activity level: Medium Temperament: Well mannered (gentle giant) Learning rate: High Obedience: High Guard Ability: High Watch Ability: High Life Span: 7-10 years Origin: Greek/Roman- Belived to date back to early egypt. Appearance- A huge breed of dog the Great Dane has a short smooth coat, ranging from colors of light grey to black with variations of the inbetween. The size of the Great Dane is obviously the first feature you notice but with perky ears and muscular bodies, some refer to them as the Apollo of dogs. Temperament- The Great Dane wants to be where the family is. He likes people a lot, including strangers and children, and will welcome visitors happily, unless he thinks you need defending. Then he can be fiercely protective. Some Danes wish they were lapdogs, and they'll keep trying to get there even if you and your lap mysteriously keep moving. History- The breed is thought to have been taken into various parts of the world by the Assyrians, who traded their dogs to the Greeks and Romans. The Greeks and Romans then bred these dogs with other breeds. Ancestors of the English Mastiff were probably involved in the breed development, and some folks believe that the Irish Wolfhound or Irish Greyhound also may have played a role. Great Danes originally were called Boar Hounds, because boars were what they were bred to hunt. Their ears were cropped to prevent boar tusks from tearing them. In the 16th century, the name of the breed was changed to English Dogges.",
			
		},
		{
			"dog": "Alaskan Malamute",
			"description": "Breed:  Alaskan Malamute Weight:  75-100 pounds Height:  23-25 inches to shoulder Color: light grey to black, red/sable Coat: long sometimes very thick Activity level: Medium Temperament: Friendly/Playful Learning rate: Very High Obedience: Medium Guard Ability:  Low Watch Ability: Medium Life Span: 12-15 years Origin: Siberia/Alaska. Appearance- The Alaskan Malamute sports a dense double coat. The thick, coarse outer coat, known as the guard coat, should not be soft or long. The undercoat is one to two inches deep. It's oily and woolly to repel wetness and cold.This breed's coat colors range from light gray to black, sable, and shades of sable to red. Temperament- Alaskan Malamutes will win you over with their playful, outgoing dispositions. They greet everyone as a friend — even strangers and first-time houseguests — so they don't make good watchdogs, but they are extremely loyal to their family and friends. Malamutes are pack animals, and they enjoy spending time with their human pack, insisting on being included in all activities that their family undertakes. They're not big-time barkers, but they do howl. History- One of the oldest Arctic sled dogs, the Alaskan Malamute's forebears crossed the land bridge from Siberia to Alaska with native peoples thousands of years ago. One tribe, known as the Mahlemuts, settled in the northeastern area of the Seward Peninsula and it's there that the Alaskan Malamute was developed. The dogs were used to hunt seals, chase away polar bears, and pull heavy sledges loaded with food or camp supplies.",
			
		},
		
		{
			"dog": "American Pitbull Terrier",
			"description": " Breed:  American Pitbull Weight:  30-85 pounds Height:  17- 19 inches to shoulder Color: red, blue, brown, grey, black and white, and brindle Coat: short Activity level: moderate to high Temperament: friendly, eager to greet Learning rate: high Obedience: high Guard Ability: high Watch Ability: high Life Span: 12-16 years Origin: 19th century England. Appearance- The short coat is shiny and stiff to the touch, and comes in all colors — red, blue, brown, grey, black and white, and brindle, among them. A medium sized dog in any aspect, the common oversized head makes this dog somewhat daunting to look at. Temperament- These dogs love people and have no idea that their size is something of a deterrent to being a lap dog. Confident and keenly aware of their surroundings, they are watchdogs in that they may alert you to the presence of strangers, but that's primarily because they're eager to greet their guests. While their love of people makes them failures as guard dogs, their courage is unmatched and they will defend their family with their lives. History- Bull and terrier breeds were created in early 19th-century England for the popular spectator sports of bull- and bear-baiting. When those sports were deemed inhumane and became illegal 1835, dog-fighting sprung up in its place — and thus was the trait for dog aggression bred into the genetic line. But another part of this breed's genetic makeup is an unwillingness to bite humans. Handlers reaching into the dog-fighting rings wanted to be able to separate dogs without getting hurt themselves. Quite soon the breed developed a reputation as a strong, protective dog, but one also known for being gentle and family-friendly.",
		},
		{
			"dog": "Rottweiler",
			"description": "Breed:  Rottweiler, Weight:  85-130 pounds, Height:  22-27 inches to shoulder, Color: black, with colored markings (rust colored mostly), Coat: Short, Activity level:  medium, Temperament: Calm yet Confident, Learning rate: medium, Obedience: Very High, Guard Ability: High, Watch Ability: High, Life Span: 8-11 years, Origin: Romans/Germany area. Appearance- Rottweilers have a short double coat that's straight and coarse. The outer coat is medium in length, shorter on the head, ears, and legs; the undercoat is found mainly on the neck and thighs. The amount of undercoat your Rottie has depends on the climate in which he lives. The Rottweiler is always black with markings that are rust to mahogany in color. The markings appear over the eyes, on the cheeks, on each side of the muzzle, on the chest and legs, and beneath the tail. There are also tan lines that resemble pencil marks on the toes. Temperament- The ideal Rottweiler is calm, confident, and courageous, never shy. He has a self-assured aloofness and doesn't make friends with people immediately or indiscriminately. Instead, he takes a wait-and-see attitude with new people or situations. With his family, he's affectionate, often following them around the house. This is not a highly excitable dog. He has an inherent desire to protect his family and property, but should never be aggressive toward people without cause. The Rottweiler is smart and adaptable with a strong work ethic. History- Rottweilers descend from the Molossus, a mastiff-type dog. Their ancestors marched to Germany with the Romans, driving the cattle that sustained them as they conquered the known world. As the army traveled, the big dogs mated with dogs that were native to the areas they passed through and laid the foundation for new breeds.",
		},
			]
	}
};
// Creating Window for backround of dogTable Function
	var dogWindow = Ti.UI.createWindow({
		backgroundColor: "black",
		title: "Dog Breeds"
	});
	
	var breedTable = Ti.UI.createTableView({
	top: 0,
});
	
var getInfo = function(){
	var infoWindow = Ti.UI.createWindow({
		title: this.title,
		backgroundColor: "white"
	});
	var infoView = Ti.UI.createScrollView({
		width: "90%",
		backgroundColor: "white"
	});
	var infoText = Ti.UI.createLabel({
		text: this.detail,
		top: 20,
	});
	var imageView = Ti.UI.createImageView({
		image: this.image,
		borderRadius: 4,
		width: 400,
		height: 400,
		});
	
	infoView.add(infoText, imageView);
	infoWindow.add(infoView);
	mainNav.openWindow(infoWindow);
};

	
	if (Ti.Platform.name === "iPhone OS"){
	dogTable.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
}

var petStoreSection = Ti.UI.createTableViewSection({
	headerTitle: dogs.Breeds.theTitle,
	footerTitle: "Find out which dog breed fits your home!"
});

	// For Loop Making Table Rows
for(var i=0, j=dogs.Breeds.dogList.length; i<j; i++){
	var theRow = Ti.UI.createTableViewRow({
		title: dogs.Breeds.dogList[i].dog,
		detail: dogs.Breeds.dogList[i].description,
		image: dogs.Breeds.dogList[i].image,
		hasChild: true
	});
	petStoreSection.add(theRow);
	theRow.addEventListener("click", getInfo);
};

var petSection = [petStoreSection];
breedTable.setData(petSection);
dogWindow.add(breedTable);
mainNav.openWindow(dogWindow);	
};

galButton.addEventListener("click", dogTable);





