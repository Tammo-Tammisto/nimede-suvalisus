// Sample array of objects
const names = [
    'Noah', 'Theo', 'Oliver', 'George', 'Leo', 'Freddie', 'Arthur', 'Archie', 'Alfie', 
      'Charlie', 'Oscar', 'Henry', 'Harry', 'Jack', 'Teddy', 'Finley', 'Arlo', 'Luca', 'Jacob', 
      'Tommy', 'Lucas', 'Theodore', 'Max', 'Isaac', 'Albie', 'James', 'Mason', 'Rory', 'Thomas', 
      'Rueben', 'Roman', 'Logan', 'Harrison', 'William', 'Elijah', 'Ethan', 'Joshua', 'Hudson', 
      'Jude', 'Louie', 'Jaxon', 'Reggie', 'Oakley', 'Hunter', 'Alexander', 'Toby', 'Adam', 'Sebastian', 
      'Daniel', 'Ezra', 'Rowan', 'Alex', 'Dylan', 'Ronnie', 'Kai', 'Hugo', 'Louis', 'Riley', 'Edward', 
      'Finn', 'Grayson', 'Elliot', 'Caleb', 'Benjamin', 'Bobby', 'Frankie', 'TPT Kristofer Valk', 
      'TPT Roman Nõukas', 'TPT Olaf Avasalu', 'TPT Sten-Hendrik Remmel', 'TPT Marten Haamer', 
      'TPT Georg Alex Kopli', 'TPT Siim Martin Schmidt', 'TPT Karl-Kevin Tigason', 'TPT Kristofer Jürgenstein', 
      'TPT Ott Tihvan', 'TPT Jakob Lillenberg', 'TPT Siim Oskar Anniste', 'TPT Arhip Jafankin', 
      'TPT Maria Lisette Haugas', 'TPT Timoteos Mägi', 'TPT Marten Joosep Rego', 'TPT Patrick Lapimaa', 
      'TPT Gert Mägi', 'TPT Greg Ojasalu', 'TPT Kristi Kuus', 'TPT Carl Ciaran Eesoja', 'TPT Sven Laht', 
      'TPT Tammo Tammisto', 'TPT Hugo Hindikainen', 'TPT Hugo Salum', 'TPT Peter Saan', 'TPT Rasmus Veike', 
      'TPT Jaan Laskar', 'TPT Travis Sova', 'TPT Ronan Sööt', 'TPT Sebastian Pebsen Zachrau', 'TPT Gert Veereste'
      // Add more names here as needed
    ];
  
    // Function to shuffle array elements
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  
    // Function to divide the array into groups
    function divideIntoGroups(array, groupSize) {
      const groups = [];
      for (let i = 0; i < array.length; i += groupSize) {
        groups.push(array.slice(i, i + groupSize));
      }
      return groups;
    }
  
    // Define the size of each group
    const groupSize = 20;
  
    // Create five separate arrays named group1, group2, ..., group5
    const groupNames = [];
    for (let i = 1; i <= 5; i++) {
      groupNames.push(`group${i}`);
    }
  
    // Shuffle the names array
    shuffleArray(names);
  
    // Create an object to hold the groups
    const allGroups = {};
  
    // Divide the shuffled array into groups
    const groups = divideIntoGroups(names, groupSize);
  
    // Assign each group to the corresponding property in the allGroups object
    for (let i = 0; i < groups.length; i++) {
      const groupName = groupNames[i] || groupNames[groupNames.length - 1];
      allGroups[groupName] = groups[i];
    }
  
    // Extract the remaining names for group5
    const remainingNames = names.slice(groupSize * 4);
    // Remove the remaining names from the original array
    names.splice(groupSize * 4, remainingNames.length);
  
    // Assign remaining names to group5
    allGroups.group5 = remainingNames;
  
    // Display each group separately
    const appElement = document.getElementById('app');
    Object.entries(allGroups).forEach(([groupName, group]) => {
      const groupElement = document.createElement('div');
      groupElement.classList.add('group');
      groupElement.innerHTML = `<h2>${groupName}</h2>`;
      group.forEach(name => {
        const nameElement = document.createElement('p');
        nameElement.textContent = name;
        groupElement.appendChild(nameElement);
      });
      appElement.appendChild(groupElement);
    });