package br.com.faculdade.projetociinicial;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class NomeController {

    @GetMapping("/nome")
    public String getNome() {
        return "Isabely Lemos de Araujo"; 
    }
}
