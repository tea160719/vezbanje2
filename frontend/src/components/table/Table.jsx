import './Table.scss';

function Table({ klijenti, onDeactivate }){ 
    return(
        <div className="parent">
            <table className="table">
                <thead>
                    <tr>
                        <th>Naziv</th>
                        <th>Email</th>
                        <th>Broj telefona</th>
                        <th>Pravno lice</th>
                        <th>Datum kreiranja</th>
                        <th>Aktivan</th>
                        <th>Deaktiviraj</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(klijenti) &&
                        klijenti.map((klijent) => (
                            <tr key={klijent.Id}>
                                <td>{klijent.Ime}</td>
                                <td>{klijent.Email}</td>
                                <td>{klijent.Phone}</td>
                                <td>{klijent.PoslovnoLice ? 'Da' : 'Ne'}</td>
                                <td>{new Date().toLocaleDateString()}</td>
                                <td>{klijent.Aktivan ? 'Da' : 'Ne'}</td>
                                <td>
                                    {klijent.Aktivan && (
                                        <button className="deaktiviraj-dugme" onClick={() => onDeactivate(klijent.Id)}>
                                            Deaktiviraj
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )
}
export default Table;