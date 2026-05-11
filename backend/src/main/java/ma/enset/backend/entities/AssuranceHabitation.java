package ma.enset.backend.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import ma.enset.backend.enums.TypeLogement;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class AssuranceHabitation extends  ContratAssurance {

        @Enumerated(EnumType.STRING)
        private TypeLogement typeLogement;

        private String adresseLogement;

        private double superficie;

}
