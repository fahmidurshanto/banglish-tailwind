Banglish Tailwind Framework - Usage Guide 🇧🇩
Banglish Tailwind is a utility-first CSS framework with Banglish (Bengali-English) class names, designed specifically for Bangladeshi developers.

INSTALLATION
CDN
For quick testing, you can include the framework via CDN:

<link href="https://unpkg.com/banglish-tailwind@latest/dist/banglish.css" rel="stylesheet">

Or for minified version:
<link href="https://unpkg.com/banglish-tailwind@latest/dist/banglish.min.css" rel="stylesheet">

NPM
Install the framework using npm:

npm install banglish-tailwind

Or using yarn:

yarn add banglish-tailwind

USAGE WITH FRAMEWORKS
React.js
1. Import the CSS in your main App.js or index.js file:
   import 'banglish-tailwind/dist/banglish.css';

2. Use the Banglish classes in your components:
   function MyComponent() {
     return (
       <div className="bl-pichhon-nil bl-likha-shada bl-bhitor-4 bl-gol">
         হ্যালো বাংলা
       </div>
     );
   }

Next.js
1. Add the CSS to your _app.js file:
   import 'banglish-tailwind/dist/banglish.css';
   
   function MyApp({ Component, pageProps }) {
     return <Component {...pageProps} />;
   }
   
   export default MyApp;

2. Use the Banglish classes in your components:
   export default function Home() {
     return (
       <div className="bl-flex bl-justify-majhe bl-items-majhe bl-pichhon-dhusor-100">
         <h1 className="bl-likha-nil bl-likha-bishal">বাংলা টেক্সট</h1>
       </div>
     );
   }

Vue.js
1. Import the CSS in your main.js file:
   import 'banglish-tailwind/dist/banglish.css';

2. Use the Banglish classes in your components:
   <template>
     <div class="bl-pichhon-sobuj bl-likha-kalo bl-bhitor-4 bl-gol">
       হ্যালো বাংলা
     </div>
   </template>

Other JavaScript Frameworks
The framework works with any JavaScript framework that supports CSS. Simply import the CSS file and use the Banglish class names in your HTML elements.

BANGLISH CLASS REFERENCE
Core Utilities:
Category	English Equivalent	Banglish Class	Example
Spacing (Padding)	p-4	bhitor-4	bl-bhitor-4
Spacing (Padding Top)	pt-4	bhitor-ustu-4	bl-bhitor-ustu-4
Spacing (Padding Bottom)	pb-4	bhitor-niche-4	bl-bhitor-niche-4
Spacing (Padding Left)	pl-4	bhitor-bam-4	bl-bhitor-bam-4
Spacing (Padding Right)	pr-4	bhitor-dan-4	bl-bhitor-dan-4
Spacing (Padding X)	px-4	bhitor-x-4	bl-bhitor-x-4
Spacing (Padding Y)	py-4	bhitor-y-4	bl-bhitor-y-4
Spacing (Margin)	m-4	bahire-4	bl-bahire-4
Spacing (Margin Top)	mt-4	bahire-ustu-4	bl-bahire-ustu-4
Spacing (Margin Bottom)	mb-4	bahire-niche-4	bl-bahire-niche-4
Colors (Background)	bg-red-500	pichhon-lal-500	bl-pichhon-lal-500
Colors (Text)	text-white	likha-shada	bl-likha-shada
Colors (Border)	border-blue-500	simana-nil-500	bl-simana-nil-500
Layout (Display)	block	dekha-block	bl-dekha-block
Layout (Flex)	flex	flex	bl-flex
Layout (Grid)	grid	grid	bl-grid
Layout (Hidden)	hidden	dekha-none	bl-dekha-none
Typography (Center)	text-center	likha-majhe	bl-likha-majhe
Typography (Left)	text-left	likha-bam	bl-likha-bam
Typography (Right)	text-right	likha-dan	bl-likha-dan
Typography (Justify)	justify-center	justify-majhe	bl-justify-majhe
Typography (Align Items)	items-center	items-majhe	bl-items-majhe
Borders (Rounded)	rounded	gol	bl-gol
Borders (Rounded Full)	rounded-full	gol-full	bl-gol-full
Effects (Shadow)	shadow	chaya	bl-chaya
Effects (Shadow MD)	shadow-md	chaya-md	bl-chaya-md
Effects (Opacity)	opacity-100	spastta-100	bl-spastta-100

Directional Terms:
ustu = Top
niche = Bottom
bam = Left
dan = Right
majhe = Center/Middle
shuru = Start
shesh = End

RESPONSIVE BREAKPOINTS
The framework includes responsive breakpoints using Banglish terms:
choto = Small (640px) - choto:bl-bhitor-4
majhari = Medium (768px) - majhari:bl-bhitor-4
boro = Large (1024px) - boro:bl-bhitor-4
khub-boro = Extra large (1280px) - khub-boro:bl-bhitor-4

Example:
<div class="bl-bhitor-4 choto:bl-bhitor-2 majhari:bl-bhitor-6">
  Responsive padding
</div>
