import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyAhlaWdtv__3QhH8bL-kD4dEN0Mrrvn1Ts");

const model = genAI.getGenerativeModel({ model: "gemini-pro" });

const moduleName = "Electrochemistry";
const moduleIntensity = "High";
const studyDuration = 6;
const moduleSubtopics = `Redox reactions, EMF of a cell, standard electrode potential, Nernst equation and its application to chemical cellsRelation between Gibbs energy change and EMF of a cell, conductance in electrolytic solutions, specific and molar conductivity, variations of conductivity with concentration, Kohlrausch's Law, electrolysis and law of electrolysis (elementary idea), dry cell-electrolytic cells and Galvanic cells, lead accumulator, fuel cells, corrosion.`;

const prompt = `

Input:

Module Name (This will be the name of the module) : ${moduleName}
Subtopics (This will include the list the subtopics within the module. Each subtopic should be a clear and concise heading that accurately reflects its content) : ${moduleSubtopics}
Intensity  (This indicates the level of depth or complexity required for each subtopic) : ${moduleIntensity}
Study Duration (Total number of hours available for studying the entire module) : ${studyDuration}

Output:

For each subtopic within the module, generate concise and informative study notes. (Subtopics are separated by commas)
Tailor the notes to the specified intensity level (low, medium, high) by:
Low: Focus on key concepts and definitions.
Medium: Provide additional details, examples, and explanations.
High: Include in-depth analysis, critical thinking questions.
Ensure the notes are well-organized, easy to understand, and relevant to the specific subtopic.

Keep the content length above 15000 tokens for Low intensity, above 25000 tokens for Medium intensity and above 50000 tokens for High intensity 

I want you to follow the above guidelines and generate the notes for the below data. 
The output should not contain anything other than the study notes STRICTLY

Example input : 

Module Name: Solutions

Module Content: Types of solutions, expression of concentration of solutions of solids in liquids, solubility of gases in liquids, solid solutions

Intensity: Medium

Study Duration: 10 hours

Ideal Example output : 

Subtopic 1: Types of Solutions (1 hour)

Concepts: Solution, Solute, Solvent, Homogeneous Mixture, Heterogeneous Mixture

Definitions:

Solution: A homogeneous mixture of two or more substances. The components are evenly distributed and cannot be distinguished visually. (Think of sugar dissolving completely in water, forming a clear liquid.)
Solute: The substance dissolved in a solution, typically present in a smaller amount. (In saltwater, salt is the solute.)
Solvent: The substance that dissolves the solute, usually present in a larger amount. (In saltwater, water is the solvent.)
Examples:

Saltwater: Salt (solute) dissolves in water (solvent).
Sugar in coffee: Sugar (solute) dissolves in coffee (solvent).
Distinguishing Solutions from Mixtures:

Solutions: Homogeneous, particles are invisible to the naked eye, stable over time.
Heterogeneous mixtures: Non-uniform, particles may be visible, can separate over time (e.g., sand in water).

Subtopic 2: Concentration of Solutions (1 hour)

Concepts: Concentration, Units of Concentration (mass percentage, molarity, molality)

Understanding Concentration:

Concentration refers to the amount of solute dissolved in a specific amount of solvent. Different units express concentration in various ways:

Mass percentage (%): The percentage of solute by mass relative to the total mass of the solution. (e.g., 10% salt solution means 10 g of salt per 100 g of solution).
Molarity (M): The number of moles of solute per liter of solution. (e.g., 1 M sugar solution means 1 mole of sugar per liter of solution).
Molality (m): The number of moles of solute per kilogram of solvent. (e.g., 1 m salt solution means 1 mole of salt per kilogram of water).
Choosing the Right Unit:

The appropriate unit depends on the context and the information you need. Mass percentage is often used for solid or highly concentrated solutions, while molarity and molality are common for liquid solutions, especially in chemical reactions.

Subtopic 3: Solubility of Gases in Liquids (1 hour)

Concepts: Solubility, Henry's Law, Factors Affecting Gas Solubility

Solubility:

The ability of a gas to dissolve in a liquid. Different gases have varying degrees of solubility, influenced by several factors.

Henry's Law:

States that at a constant temperature, the amount of a gas dissolved in a liquid is directly proportional to the partial pressure of the gas above the liquid. (Higher pressure leads to more gas dissolving.)

Factors Affecting Solubility:

Temperature: Generally, solubility decreases with increasing temperature for most gases. As the temperature rises, the kinetic energy of the gas molecules increases, making them more likely to escape the liquid.
Pressure: Solubility increases with increasing pressure. Applying pressure forces more gas molecules into the liquid.
Intermolecular Interactions: The strength of interactions between gas and liquid molecules also plays a role. Stronger attractions between gas and solvent molecules lead to higher solubility.

Subtopic 4: Solid Solutions (1.5 hours)

Concepts: Solid Solution, Types of Solid Solutions (substitutional, interstitial)

Solid Solutions:

Formed when atoms or molecules of one substance (solute) are incorporated into the crystal structure of another substance (solvent). This creates a homogeneous solid mixture.

Types of Solid Solutions:

Substitutional Solid Solutions: Solute atoms replace solvent atoms in the crystal lattice. (e.g., Brass: Zinc atoms substitute for copper atoms in the copper crystal lattice.)
Interstitial Solid Solutions: Solute atoms occupy empty spaces between solvent atoms in the crystal lattice. (e.g., Steel: Small carbon atoms fit between larger iron atoms in the iron crystal lattice.)
Understanding Solid Solutions:

Solid solutions are crucial in many materials, influencing their properties like strength, hardness, and electrical conductivity.
`;

const result = await model.generateContent(prompt);

console.log(result.response.text());
