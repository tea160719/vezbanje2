
# Projekat - Uputstvo za pokretanje

![.NET](https://img.shields.io/badge/.NET-7.0-blue)
![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![SQLite](https://img.shields.io/badge/SQLite-Database-lightgrey)

## Važna napomena
- Mislim da nisam dobro napravio datumKreiranja, pretpostavljam da samo uzima današnji datum umesto da ga getuje i setuje. Proverite.
- **Entity Framework koristi Sqlite paket umesto SqlServer-a**, jer se projekat razvija na Linux-u i u **VS Code** (pošto nema Visual Studio 2022 verzije za Linux).
- Potreban je **.NET CLI** ako želite da pokrenete projekat iz VS Code-a.
- Ako koristite Visual Studio (Windows), pretpostavlja se da se solution otvara i startuje normalno.

---

## Pokretanje Frontenda
1. Klonirajte repozitorijum.
2. U terminalu uđite u **frontend** folder:
   ```bash
   cd frontend
   ```
3. Instalirajte sve potrebne node module:
   ```bash
   npm install
   ```
4. Pokrenite frontend:
   ```bash
   npm run dev
   ```
   - Frontend će se startovati na `http://localhost:5173` (ako port nije zauzet).  
   - **Važno**: Backend je konfigurisan da radi samo sa ovim portom.

---

## Pokretanje Backenda
1. Iz root foldera projekta (gde se nalaze **backend** i **frontend** folderi), uđite u backend:
   ```bash
   cd backend
   ```
2. Pokrenite aplikaciju:
   ```bash
   dotnet watch run
   ```
   - Backend radi na portu **5074**.  
   - **Napomena**: Frontend i backend će komunicirati samo ako frontend radi na `5173`, a backend na `5074`.

---

## Podrška
- U slučaju poteškoća, pišite u **Telegram grupi** ili meni privatno na Instagram:  
  👉 [@kostiic.n](https://instagram.com/kostiic.n)

---

## Srećno na ispitu! 🎓
