using backend.Services;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class KlijentiController : ControllerBase
{
    private IRepozitorjiumKlijenata _repozitorjiumKlijenata;

    public KlijentiController(IRepozitorjiumKlijenata repozitorjiumKlijenata)
    {
        _repozitorjiumKlijenata = repozitorjiumKlijenata;
    }

    // GET: api/Klijenti
    [HttpGet]
    public List<Klijent> vratiSveKlijente()
    {
        return _repozitorjiumKlijenata.vratiSveKlijente();
    }

    // GET: api/Klijenti/5
    [HttpGet("{id}")]
    public Klijent vratiStudenta(int id)
    {
        return _repozitorjiumKlijenata.vratiKlijenta(id);
    }

    // PUT: api/Klijenti/5
    [HttpPut("{id}")]
    public IActionResult azurirajKlijenta(int id, [FromBody] Klijent klijent)
    {
        try
        {
            _repozitorjiumKlijenata.azurirajKlijenta(klijent);
            return NoContent();

        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }

    // POST: api/Klijenti
    [HttpPost]
    public IActionResult dodajKlijenta([FromBody] Klijent klijent)
    {
        try
        {
            _repozitorjiumKlijenata.dodajKlijenta(klijent);
            return Created();
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }

    // DELETE: api/Klijenti/5
    [HttpDelete("{id}")]
    public IActionResult obrisiKlijenta(int id)
    {
        try
        {
            _repozitorjiumKlijenata.obrisiKlijenta(id);
            return NoContent();
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }
    
    [HttpPut("{id}/deaktiviraj")]
    public IActionResult deaktivirajKlijenta(int id)
    {
        try
        {
            _repozitorjiumKlijenata.deaktivirajKlijenta(id);
            return NoContent();
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }
    
}