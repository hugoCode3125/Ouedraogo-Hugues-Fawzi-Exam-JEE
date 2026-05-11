package ma.enset.backend.repository;

import ma.enset.backend.entities.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository  extends JpaRepository<Client,Long> {
}
