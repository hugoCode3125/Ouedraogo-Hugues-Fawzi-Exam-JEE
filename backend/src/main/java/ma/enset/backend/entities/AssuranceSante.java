package ma.enset.backend.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import ma.enset.backend.enums.NiveauCouverture;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class AssuranceSante extends  ContratAssurance {

    @Enumerated(EnumType.STRING)
    private NiveauCouverture niveauCouverture;

    private int nombrePersonnesCouvertes;

}
