export class Bolecode {
  etapa_processo_boleto: string;
  beneficiario: {
    id_beneficiario: string;
  };
  dado_boleto: {
    tipo_boleto: string;
    texto_seu_numero: string;
    codigo_carteira: string;
    valor_total_titulo: string;
    codigo_especie: string;
    data_emissao: string;
    valor_abatimento: string;
    negativacao: {
      negativacao: string;
      quantidade_dias_negativacao: string;
    };
    pagador: {
      pessoa: {
        nome_pessoa: string;
        nome_fantasia: string;
        tipo_pessoa: {
          codigo_tipo_pessoa: string;
          numero_cadastro_pessoa_fisica: string;
        };
      };
      endereco: {
        nome_logradouro: string;
        nome_bairro: string;
        nome_cidade: string;
        sigla_UF: string;
        numero_CEP: string;
      };
    };
    sacador_avalista: {
      pessoa: {
        nome_pessoa: string;
        tipo_pessoa: {
          codigo_tipo_pessoa: string;
          numero_cadastro_pessoa_fisica: string;
        };
      };
      endereco: {
        nome_logradouro: string;
        nome_bairro: string;
        nome_cidade: string;
        sigla_UF: string;
        numero_CEP: string;
      };
    };
    dados_individuais_boleto: [
      {
        numero_nosso_numero: string;
        data_vencimento: string;
        texto_uso_beneficiario: string;
        valor_titulo: string;
        data_limite_pagamento: string;
      },
    ];
    juros: {
      data_juros: string;
      codigo_tipo_juros: string;
      valor_juros: string;
    };
    multa: {
      codigo_tipo_multa: string;
      percentual_multa: string;
      data_multa: string;
    };
    lista_mensagem_cobranca: [
      {
        mensagem: string;
      },
    ];
    desconto: {
      codigo_tipo_desconto: string;
      descontos: [
        {
          data_desconto: string;
          valor_desconto: string;
          percentual_desconto: string;
        },
      ];
    };
  };
  dados_qrcode: {
    chave: string;
    id_location: number;
  };
}
