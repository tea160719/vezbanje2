namespace backend.Services{

    public class RepozitorijumKlijenataUMemoriji : IRepozitorjiumKlijenata
    {
        List<Klijent> klijenti = new List<Klijent>();

        public void dodajKlijenta(Klijent klijent)
        {
            var maxId = klijenti.Any() ? klijenti.Max(k => k.Id) : 0;
            klijent.Id = maxId + 1;
            klijent.Aktivan = true;
            klijent.DatumKreiranja = DateTime.Now;
            var klijent_u_listi = klijenti.FirstOrDefault(x => x.Id == klijent.Id || x.Email == klijent.Email);
            if (klijent_u_listi != null)
            {
                throw new Exception("Klijent vec postoji");
            }
            klijenti.Add(klijent);
        }

        public void azurirajKlijenta(Klijent klijent)
        {
            var klijent_u_listi = klijenti.FirstOrDefault(x => x.Id == klijent.Id);
            if (klijent_u_listi == null)
            {
                throw new Exception("Student nije u listi");
            }
            klijent_u_listi.Email = klijent.Email;
            klijent_u_listi.Phone = klijent.Phone;
            klijent_u_listi.PoslovnoLice = klijent.PoslovnoLice;
            klijent_u_listi.DatumKreiranja = DateTime.Now;
            klijent_u_listi.Aktivan = klijent.Aktivan;
        }

        public void obrisiKlijenta(long id)
        {
            var klijent = klijenti.FirstOrDefault(x => x.Id == id);
            if (klijent == null)
            {
                throw new Exception("Klijent nije u listi\n");
            }
            klijenti.Remove(klijent);
        }

        public Klijent vratiKlijenta(long id)
        {
            var klijent = klijenti.FirstOrDefault(x => x.Id == id);
            if (klijent == null)
            {
                throw new Exception("Klijent nije u listi");
            }
            return klijent;
        }

        public List<Klijent> vratiSveKlijente()
        {
            return klijenti;
        }
        
        public void deaktivirajKlijenta(int id)
        {
            var klijent = klijenti.FirstOrDefault(x => x.Id == id);
            if (klijent == null)
            {
                throw new ArgumentException("Klijent sa zadatim ID-jem ne postoji.");
            }
            klijent.Aktivan = false;
            klijent.DatumDeaktivacije = DateTime.Now;
        }
    }
}