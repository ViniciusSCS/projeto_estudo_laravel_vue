<template>
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header" style="text-align: center">
                    <strong style="text-transform: uppercase">Formulário de Cadastro</strong>
                </div>
                <div class="card-body">
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label for="nome">Nome</label>
                            <input type="name" v-model="nome" class="form-control" id="nome" placeholder="Nome"
                                   style="text-transform: uppercase">
                        </div>
                        <div class="form-group col-md-4">
                            <label for="email">Email</label>
                            <input type="email" v-model="email" class="form-control" id="email" placeholder="Email"
                                   style="text-transform: uppercase">
                        </div>
                        <div class="form-group col-md-4">
                            <label for="cpf">CPF</label>
                            <input id="cpf" type="text"
                                   class="form-control"
                                   v-model="cpf"
                                   v-mask="'###.###.###-##'"
                                   placeholder="000.000.000-00">
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label for="endereco">Endereço</label>
                            <input type="text" v-model="endereco" class="form-control" style="text-transform: uppercase"
                                   id="endereco"
                                   placeholder="Endereço">
                        </div>
                        <div class="form-group col-md-2">
                            <label>
                                Telefone
                            </label>
                            <input type="text" class="form-control" id="telefone" v-model="telefone"
                                   v-mask="'(##) # ####-####'" placeholder="(00) 0 0000-0000">

                        </div>
                        <div class="form-group col-md-2">
                            <label for="numero">Número</label>
                            <input type="text" v-model="numero" class="form-control" id="numero" placeholder="0">
                        </div>
                        <div class="form-group col-md-4">
                            <label for="complemento">Complemento</label>
                            <input type="text" v-model="complemento" class="form-control" id="complemento"
                                   placeholder="Complemento" style="text-transform: uppercase">
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-group col-md-2">
                            <label for="data_nascimento">Data de Nascimento</label>
                            <input class="form-control" v-model="data_nascimento" type="date" id="data_nascimento">
                        </div>

                        <div class="form-group col-md-3">
                            <label for="sexo">Sexo</label>
                            <v-select
                                id="sexo"
                                v-model="sexoSelecionado"
                                :options="sexo"
                                style="text-transform: uppercase"
                            ></v-select>
                        </div>
                    </div>
                    <button type="button" class="btn btn-success" v-on:click="salvar()">
                        <i class="far fa-save"></i> Salvar
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'

export default {
    name: "pessoa",

    methods: {
        salvar: function () {
            var self = this

            if (self.sexoSelecionado == null || self.cpf == null || self.telefone == null ||
                self.nome == null || self.email == null || self.endereco == null || self.complemento == null ||
                self.data_nascimento == null) {

                return Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Preencha todos os campos!',
                })

            } else {
                var dados = {
                    cpf: self.cpf,
                    nome: self.nome,
                    email: self.email,
                    numero: self.numero,
                    endereco: self.endereco,
                    telefone: self.telefone,
                    sexo: self.sexoSelecionado,
                    complemento: self.complemento,
                    data_nascimento: self.data_nascimento
                }

                self.limpaForm();

                console.log('SALVO... ', dados)

                return Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Salvo com sucesso!!',
                    showConfirmButton: false,
                    timer: 1500
                })

            }
        },

        limpaForm: function () {
            var self = this

            self.cpf = ''
            self.nome = ''
            self.email = ''
            self.endereco = ''
            self.complemento = ''
            self.data_nascimento = ''


            self.numero = null
            self.telefone = null
            self.sexo.label = null
            self.sexo.value = null
            self.verificaRadio = null
            self.sexoSelecionado = null
        }
    },

    data() {
        return {
            sexo: [
                {value: 1, label: 'Masculino'},
                {value: 2, label: 'Feminino'},
            ],

            cpf: '',
            nome: '',
            email: '',
            endereco: '',
            complemento: '',
            data_nascimento: '',

            numero: null,
            telefone: null,
            verificaRadio: null,
            sexoSelecionado: null,
        }
    },
}
</script>

<style scoped>

</style>