## 3. Semester projekt - Momondo lookalike (SPA /REST)

Her er vores projekt fra 3. semester.

[Klik her for at se det færdige resultat](https://rasmuslynge.github.io/deploy_Flight/)



### Om projektet:

- Man kan som bruger af siden søge efter lande og finde flyrejser (lande man kan søge på: Denmark, Sweden, Finland, Norway)
- Man kan logge ind som bruger (username: user, password: userpw)
- Brugere kan tilføje fly til ønskeliste (hjertet) og se dem under deres wishlist 
- Vi arbejdede sammen med en anden gruppe, som lavede et event API med events i Europa. Ud fra geodata kan man finde events i nærheden af sin destination.
- Frontend design (CSS mm.) blev outsourcet igennem upWork ellers er resten lavet af medlemmerne af de forskellige repositories  
- Projektet er ikke ment til produktion, men skal ses som "proof of concept" over hvad vi har lært gennem 3. semester.
- Projektet blev brugt til systemudviklingseksamen, med fokus på udviklingsmetoder.


#### Vores oprindelige repositories er her: 

| repo | link | info |
| ------------- |:-------------:|:--------|
| Backend med flydata | [Link til repo](https://github.com/Magmose/CA3Flights)  | Dette api skulle ligne et api fra f.eks. kiwi. Her har vi lagt 10000 tilfældigt genererede fly op, som kan søges efter med forskellige parametre som dato og destination |
| Backend for brugere| [Link til repo](https://github.com/RasmusLynge/examPrep/) | Dette api bliver brugt til bruger login og til at hente brugernes fly fra deres ønskeliste | 
| Backend der henter flydata | [Link til repo](https://github.com/Magmose/CA3)      | Dette api skulle forestille et api som f.eks. momondos eget api, der henter flydata fra forskellige databaser.|
| Frontend i react | [Link til repo](https://github.com/RasmusLynge/flightfront)    | Dette repo er en kopi af vores oprindelige react app. Vi har lavet dette repo for at få det sat op til github pages. Det oprindelige kan ses med linket |
| React native app | [Link til repo](https://github.com/RasmusLynge/flightApp) | Appen kalder et gammelt api og skal derfor lige rettes til, men resten virker fint og er lavet fra bunden af gruppen |  
