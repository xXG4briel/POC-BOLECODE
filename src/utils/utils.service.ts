/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { writeFileSync } from 'fs';
import { Boleto } from 'src/models/boleto';
import { v4 } from 'uuid';

@Injectable()
export class UtilsService {
  base64ToImg(base64: string) {
    return new Promise((resolve) => {
      try {
        const buffer = Buffer.from(base64, 'base64');

        writeFileSync(`./src/assets/imgs/bolecode/${v4()}.jpg`, buffer);

        resolve(true);
      } catch (err) {
        return err;
      }
    });
  }
  getBoletoAleatorio(): Boleto {
    return {
      etapa_processo_boleto: 'efetivacao',
      beneficiario: {
        id_beneficiario: '150000052061',
      },
      dado_boleto: {
        tipo_boleto: 'a vista',
        texto_seu_numero: '000001',
        codigo_carteira: '110',
        valor_total_titulo: '90000000000030000',
        codigo_especie: '01',
        data_emissao: '2022-03-25',
        valor_abatimento: '00000000000000010',
        negativacao: {
          negativacao: '8',
          quantidade_dias_negativacao: '010',
        },
        pagador: {
          pessoa: {
            nome_pessoa: 'Joao Silva',
            nome_fantasia: 'Joao Silva Fantasia',
            tipo_pessoa: {
              codigo_tipo_pessoa: 'F',
              numero_cadastro_pessoa_fisica: '26556923221',
            },
          },
          endereco: {
            nome_logradouro: 'Av do Estado, 5533',
            nome_bairro: 'Mooca',
            nome_cidade: 'Sao Paulo',
            sigla_UF: 'SP',
            numero_CEP: '04135010',
          },
        },
        sacador_avalista: {
          pessoa: {
            nome_pessoa: 'Sacador Teste',
            tipo_pessoa: {
              codigo_tipo_pessoa: 'F',
              numero_cadastro_pessoa_fisica: '38365972841',
            },
          },
          endereco: {
            nome_logradouro: 'Av do Estado, 5533',
            nome_bairro: 'Mooca',
            nome_cidade: 'Sao Paulo',
            sigla_UF: 'SP',
            numero_CEP: '04135010',
          },
        },
        dados_individuais_boleto: [
          {
            numero_nosso_numero: '12345678',
            data_vencimento: '2022-07-30',
            texto_uso_beneficiario: '000001',
            valor_titulo: '00000000000010001',
            data_limite_pagamento: '2022-10-30',
          },
        ],
        juros: {
          data_juros: '2022-09-30',
          codigo_tipo_juros: '93',
          valor_juros: '00000000000000010',
        },
        multa: {
          codigo_tipo_multa: '02',
          percentual_multa: '000000100001',
          data_multa: '2022-10-30',
        },
        lista_mensagem_cobranca: [
          {
            mensagem: 'mensagem 1',
          },
        ],
        desconto: {
          codigo_tipo_desconto: '02',
          descontos: [
            {
              data_desconto: '2022-06-30',
              valor_desconto: '00000000000010000',
              percentual_desconto: '000000001010',
            },
          ],
        },
      },
      dados_qrcode: {
        chave: 'pjoperador@gmail.com',
        id_location: 789,
      },
    };
  }
}
