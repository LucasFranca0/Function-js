inicio();

function inicio() {
    var opcao = parseInt(prompt("Insira a função que deseja executar: \n 1). Pets \n 2). Lanche \n 3). Geometria \n 4). Fisica \n 5). Sair"));

    switch (opcao) {

        case 1:
            calcular_idade_pet();
            break;
        case 2:
            calculo_lanche();
            break;
        case 3:
            calculo_geometria();
            break;
        case 4:
            calculo_temperatura();
            break;
        case 5:
            sair();
            break;
        default:
            alert("Insira uma opção valida de 1 a 5");
            inicio();
            break;
    }

    function calcular_idade_pet() {

        let opcao = parseInt(prompt("Selecione a espécie do seu pet: \n 1). Cachorro \n 2). Gato \n 3). Sair"));

        switch (opcao) {
            case 1:
                idade_dog();
                break;
            case 2:
                idade_cat();
                break;
            case 3:
                inicio();
                break;
            default:
                alert("Opcao inválida! Insira uma opção de 1 a 3.");
                calcular_idade_pet();
                break;
        }

        function idade_dog() {

            let ano_humano = 0;
            let contador = 0;
            const primeiro_ano_dog = 15;
            const segundo_ano_dog = 10;
            const terceiro_ano_dog = 5;

            let nome_pet = prompt("Qual o nome do seu pet?");
            if (nome_pet == "" || nome_pet == Number) {
                alert("Este campo não pode ser vazio. Insira um nome, por favor.");
                idade_dog();
            }

            let idade_animal = parseInt(prompt(`Insira a idade do(a) ${nome_pet}:`));
            if (idade_animal == "" || idade_animal == NaN || idade_animal == 0) {
                alert("Insira um valor acima de 0, por favor.");
                idade_dog();
            }

            if (idade_animal == 1) {
                ano_humano += primeiro_ano_dog;
                alert(`${nome_pet} tem ${ano_humano} anos em anos humanos! O seu primeiro ano de vida é equivalente há 15 anos humanos. `);
                inicio();
            } else if (idade_animal == 2) {
                ano_humano += primeiro_ano_dog + segundo_ano_dog;
                alert(`${nome_pet} tem ${ano_humano} anos em anos humanos! O seu segundo ano de vida é equivale há 10 anos humanos. Totalizando 25 anos humanos para 2 anos de vida do seu cachorro.`);
                inicio();
            } else if (idade_animal > 2) {
                ano_humano += primeiro_ano_dog + segundo_ano_dog;
                idade_animal -= 2;              // conta a idade do animal a partir do 3º ano, para assim incrementar abaixo +5 na idade humano. 

                while (contador < idade_animal) {
                    ano_humano += terceiro_ano_dog;
                    contador++;
                }
                alert(`${nome_pet} tem ${ano_humano} anos em anos humanos! A partir do 3º ano de vida a relação de anos humanos é de 5 anos para cada 1 ano do seu animal.`);
                inicio();
            }
        }

        function idade_cat() {

            let ano_humano = 0;
            let contador = 0;
            const primeiro_ano_cat = 15;
            const segundo_ano_cat = 10;
            const terceiro_ano_cat = 4;

            let nome_pet = prompt("Insira o nome do seu pet: ");
            if (nome_pet == "" || nome_pet == Number) {
                alert("Este campo não pode ser vazio. Insira um nome, por favor.");
                idade_cat();
            }

            let idade_animal = parseInt(prompt(`Insira a idade do(a) ${nome_pet}:`));
            if (idade_animal == "" || idade_animal == NaN) {
                alert("Insira um valor acima de 0, por favor.");
                idade_cat();
            }


            if (idade_animal == 1) {
                ano_humano += primeiro_ano_cat;
                alert(`${nome_pet} tem ${ano_humano} anos em anos humanos! A relação de anos animais e anos humanos para gatos em seu primeiro ano de vida é de 15 para 1 ano`);
                inicio();
            } else if (idade_animal == 2) {
                ano_humano += primeiro_ano_cat + segundo_ano_cat;
                alert(`${nome_pet} tem ${ano_humano} anos em anos humanos! A relação de ano animais e ano humanos para gatos em seu segundo ano de vida é de 10. Totalizando 25 para 2 anos`);
                inicio();
            } else if (idade_animal > 2) {
                ano_humano += primeiro_ano_cat + segundo_ano_cat;
                idade_animal -= 2;

                while (contador < idade_animal) {
                    ano_humano += terceiro_ano_cat;
                    contador++;
                }
                alert(`${nome_pet} tem ${ano_humano} anos em anos humanos! A partir do 3º ano de vida a relação de anos humanos é de 4 anos para cada 1 ano do seu animal.`);
                inicio();
            }
        }
    }

    function calculo_lanche() {

        const idade_final = 100;
        let idade_calculo;
        let calculo_lanche_ano;
        let total_lanche;

        let idade = parseInt(prompt("Insira a sua idade:"));

        if (idade == "" || idade == NaN || idade > 100) {
            alert("Valor inválido. Insira um valor acima de 0, por favor.");
            calculo_lanche();
        }

        let quantidade_lanche_dia = parseInt(prompt("Insira a quantidade de lanches que você consome por dia:"));

        if (quantidade_lanche_dia == "" || quantidade_lanche_dia == NaN) {
            alert("Valor inválido. Tente novamente");
            calculo_lanche();
        }

        idade_calculo = idade_final - idade;
        calculo_lanche_ano = quantidade_lanche_dia * 365;
        total_lanche = calculo_lanche_ano * idade_calculo;

        alert(`Você precisará de ${total_lanche.toLocaleString('pt-BR')} lanches para durar até ${idade_final} anos`);
        inicio();
    }

    function calculo_geometria() {

        let opcao = parseInt(prompt("Escolha a opção de calculo: \n 1). Circunferência \n 2). Área \n 3). Sair"));

        switch (opcao) {

            case 1:
                circunferencia_calculo();
                break;
            case 2:
                area_calculo();
                break;
            case 3:
                inicio();
                break;
            default:
                alert("Insira uma opção válida de 1 a 3");
                break;
        }

        function circunferencia_calculo() {

            const pi = 3.14;
            let raio = parseFloat(prompt("Insira a medida do raio"));

            if (raio == "" || raio == NaN) {

                alert("Valor inválido. Tente novamente");
                calculo_geometria();
            }
            else {
                let calculo = (2 * pi) * raio;
                alert(`A circunferência é ${calculo}`);
                calculo_geometria();
            }
        }

        function area_calculo() {

            let raio = parseFloat(prompt("Insira a medida do raio"));
            if (raio == "" || raio == NaN) {
                alert("Valor Invalido. Tente Novamente");
                calculo_geometria();
            }
            const pi = 3.14;
            let calculo = pi * (raio ** 2);
            alert(`A área é ${calculo}`);
        }
    }

    function calculo_temperatura() {

        let opcao = parseFloat(prompt("Escolha a opção de conversão desejada: \n 1). Fahrenheit \n 2). Celsius \n 3). Sair"));

        switch (opcao) {

            case 1:
                converte_fahrenheit();
                break;
            case 2:
                converte_celsius();
                break;
            case 3:
                inicio();
                break;
            default:
                alert("Opcao inválida, insira uma opção de 1 a 3");
                calculo_temperatura();
                break;
        }

        function converte_fahrenheit() {

            let temperatura_celsius = parseFloat(prompt("Insira a temperatura em Celsius para a conversão"));
            let conversao_fahrenheit = (temperatura_celsius * (9 / 5)) + 32;

            alert(`${temperatura_celsius}ºC é igual a ${conversao_fahrenheit}ºF`);
            calculo_temperatura();
        }

        function converte_celsius() {

            let temperatura_fahrenheit = parseFloat(prompt("Insira a temperatura em Fahrenheit para conversão"));
            let conversao_celsius = (temperatura_fahrenheit - 32) * 5 / 9;

            alert(`${temperatura_fahrenheit}ºF é igual a ${conversao_celsius}ºC`);
            calculo_temperatura();
        }
    }


    function sair() {

        var sair = confirm("Deseja sair do programa?");
        if (sair) {
            alert("Obrigado, volte sempre!");
            window.close();

        } else {
            inicio();
        }
    }

}