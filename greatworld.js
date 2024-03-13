// Informe o seu nome no espaço em branco
let nome = " "
// Informe o seu sexo no espaço em branco
let sexo = " "
// Informe o seu contato
let numerowhatsapp = " "


if (sexo === "feminino"){
    console.log("Olá,"+ nome+"! " + "Seja muito bem-vinda!!")
}
else if (sexo === "masculino"){
    console.log("Olá,"+ nome+"! " + "Seja muito bem-vindo!!")
}
else {
    console.log("Olá,"+ nome+"! " + "Seja muito bem-vindxx!!")
}

// Pergunta para você:
console.log("É ótimo te ver por aqui! Como gostaria de contribuir?")

// Você pode contribuir através de Doação ou Serviço comunitário. Preencha o espaço abaixo com a opção de sua preferência, respeitando o uso das letras maiúsculas.
let contribuir= " " 

switch(contribuir){
    case "Doação":
        console.log("Excelente! É sempre muito bom receber o que podes doar, faz bastante diferença!") 

break

    case "Serviço comunitário":
        console.log("Incrível! Sempre precisamos de mais uma mão para nos ajudar a tornar o mundo um lugar mais agradável para todos!")}


if (contribuir === "Doação"){
    console.log("A sua doação seria do tipo objeto ou do tipo financeira?")}

else if (contribuir === "Serviço comunitário"){
    console.log("Você gostaria de participar do Sopão das Sextas ou da Organização do Espaço?")
}

// No espaço abaixo você deve informar qual opção deseja.
// Se escolheu Doação, pode optar entre doação de objeto ou financeira.
// Se escolheu Serviço comunitário, pode optar entre Sopão das Sextas ou da Organização do Espaço
let tipodecontribuição = " " // objeto, financeira, Sopão das sextas ou Organização do Espaço

switch(tipodecontribuição){
    case "objeto":
    console.log("Legal! Entraremos em contato através do seu whatsapp " + numerowhatsapp + " para marcarmos o dia e o horário que podes vir para realizar a doação! Agradecemos a sua colaboração :)") 
    break

    case "financeira":
    console.log("Legal! As doações financeiras acontecem através de pagamento por boleto bancário. Entraremos em contato através do seu whatsapp "+numerowhatsapp+" para finalizarmos! Agradecemos a sua colaboração :)")
    break

    case "Sopão das Sextas":
    console.log("Legal! Entraremos em contato com você através do seu whatsapp "+numerowhatsapp+" para marcarmos uma reunião de alinhamento, na qual explicamos direitinho como funciona a logística da Equipe do Sopão das Sextas :)")
    break

    case "Organização do Espaço":
    console.log("Legal! Entraremos em contato com você através do seu whatsapp "+numerowhatsapp+" para marcarmos uma reunião de alinhamento, na qual explicamos direitinho como funciona a logística da Equipe da Organização do Espaço :)")
    break
}
// Com todas as variáveis preenchidas, pode rodar o código ;)