    using System;
    using System.ComponentModel.DataAnnotations;

public class Klijent
{
    [Key]
    public int Id { get; set; }

    [Required]
    public string Ime { get; set; }

    [Required]
    [EmailAddress]
    public string Email { get; set; }

    [Required]
    [Phone]
    public string Phone { get; set; }

    public bool PoslovnoLice { get; set; }

    public DateTime DatumKreiranja = DateTime.Now;

    public bool Aktivan { get; set; }

    public DateTime? DatumDeaktivacije { get; set; }

    public int godine { get; set }
}