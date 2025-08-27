namespace backend.Services{
    public interface IRepozitorjiumKlijenata
    {
        void dodajKlijenta(Klijent klijent);
        List<Klijent> vratiSveKlijente();
        Klijent vratiKlijenta(long id);
        void azurirajKlijenta(Klijent klijent);
        void obrisiKlijenta(long id);
        void deaktivirajKlijenta(int id);
    }
}