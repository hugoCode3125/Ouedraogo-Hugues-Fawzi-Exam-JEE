package ma.enset.backend.repository;

import ma.enset.backend.entities.AssuranceSante;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AssuranceSanteRepository extends JpaRepository<AssuranceSante,Long> {
}
