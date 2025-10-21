package br.com.faculdade.projetociinicial;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class FaculdadeControllerTest {

    @Autowired
    private NomeController controller;

    @Test
    void contextLoads() {
        assertThat(controller).isNotNull();
    }

    @Test
    void deveRetornarNomeCorreto() {
        assertThat(controller.getNome()).isEqualTo("Isabely Lemos de Araujo");
    }
}
