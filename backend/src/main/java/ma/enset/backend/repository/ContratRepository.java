package ma.enset.backend.repository;

import ma.enset.backend.entities.ContratAssurance;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContratRepository extends JpaRepository<ContratAssurance,Long> {
}
