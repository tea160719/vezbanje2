import './StartPage.scss';
import Table from '../../components/table/Table';
import AddContact from '../../components/addContactPopup/AddContact';
import { useState, useEffect } from 'react';

type Klijent = {
    Id: number;
    Ime: string;
    Email: string;
    Phone: string;
    PoslovnoLice: boolean;
    DatumKreiranja: string;
    Aktivan: boolean;
    DatumDeaktivacije?: string;
};

function StartPage() {
    const [visible, setVisible] = useState(false);
    const [klijenti, setKlijenti] = useState<Klijent[]>([]);
    
    const [searchTermIme, setSearchTermIme] = useState('');
    const [searchTermEmail, setSearchTermEmail] = useState('');
    const [filterPoslovnoLice, setFilterPoslovnoLice] = useState('');
    const [filterDatumDeaktivacije, setFilterDatumDeaktivacije] = useState('');
    
    const preuzmiKlijente = async () => {
        try {
            const response = await fetch('http://localhost:5074/api/Klijenti');
            if (response.ok) {
                const data = await response.json();
                setKlijenti(data);
            }
        } catch (error) {
            console.error('Greška pri preuzimanju klijenata:', error);
        }
    };

    const deaktivirajKlijenta = async (id: number) => {
        try {
            const response = await fetch(`http://localhost:5074/api/Klijenti/${id}/deaktiviraj`, {
                method: 'PUT',
            });
            if (response.ok) {
                preuzmiKlijente();
            } else {
                console.error('Greška pri deaktivaciji klijenta:', response.status);
            }
        } catch (error) {
            console.error('Došlo je do greške u mreži:', error);
        }
    };

    useEffect(() => {
        preuzmiKlijente();
    }, []);

    const filtriraniKlijenti = klijenti.filter((klijent) => {
        const matchIme = klijent.Ime.toLowerCase().includes(searchTermIme.toLowerCase());
        const matchEmail = klijent.Email.toLowerCase().includes(searchTermEmail.toLowerCase());
        const matchPoslovnoLice = filterPoslovnoLice === '' || klijent.PoslovnoLice.toString() === filterPoslovnoLice;
        
        const matchDatumDeaktivacije = filterDatumDeaktivacije === '' || (
            klijent.DatumDeaktivacije && 
            new Date(klijent.DatumDeaktivacije).toLocaleDateString() === new Date(filterDatumDeaktivacije).toLocaleDateString()
        );

        return matchIme && matchEmail && matchPoslovnoLice && matchDatumDeaktivacije;
    });

    const toggleVisible = () => {
        setVisible(!visible);
    };

    return (
        <>
        
        <div className="container">
            {visible ? (
                <AddContact onClose={toggleVisible} onClientAdded={preuzmiKlijente} />
            ) : (
                <div className="main-content">
                    <h1>Dodajte kontakta</h1>
                        <div className="filter-group">
                        <input
                            type="text"
                            placeholder="Pretraži po imenu..."
                            value={searchTermIme}
                            onChange={(e) => setSearchTermIme(e.target.value)}
                            className="search-input"
                        />
                        <input
                            type="text"
                            placeholder="Pretraži po email-u..."
                            value={searchTermEmail}
                            onChange={(e) => setSearchTermEmail(e.target.value)}
                            className="search-input"
                        />
                        <select
                            value={filterPoslovnoLice}
                            onChange={(e) => setFilterPoslovnoLice(e.target.value)}
                            className="filter-select"
                        >
                            <option value="">Svi tipovi</option>
                            <option value="true">Pravno lice</option>
                            <option value="false">Fizičko lice</option>
                        </select>
                        <input
                            type="date"
                            value={filterDatumDeaktivacije}
                            onChange={(e) => setFilterDatumDeaktivacije(e.target.value)}
                            className="filter-date"
                        />
                    </div>

                    <Table klijenti={filtriraniKlijenti} onDeactivate={deaktivirajKlijenta} />
                    <button className="dodaj" onClick={toggleVisible}>
                        Dodaj kontakt
                    </button>
                </div>
            )}
        </div>
        </>
    );
}
export default StartPage;