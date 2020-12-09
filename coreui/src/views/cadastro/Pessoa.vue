<template>
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header" style="text-align: center">
                    <strong>Credit Card </strong> <small>Form</small>
                </div>
                <div class="card-body">
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label for="nome">Nome</label>
                            <input type="name" class="form-control" id="nome" placeholder="Nome">
                        </div>
                        <div class="form-group col-md-4">
                            <label for="email">Email</label>
                            <input type="email" class="form-control" id="email" placeholder="Email">
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
                            <input type="text" class="form-control" id="endereco" placeholder="Endereço">
                        </div>
                        <div class="form-group col-md-2">
                            <label>
                                Possui Número?
                            </label>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="sim" value="1">
                                <label class="form-check-label" for="sim">
                                    Sim
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="nao" value="2">
                                <label class="form-check-label" for="nao">
                                    Não
                                </label>
                            </div>
                        </div>
                        <div class="form-group col-md-2">
                            <label for="numero">Número</label>
                            <input type="text" v-model="numero" class="form-control" id="numero" placeholder="0">
                        </div>
                        <div class="form-group col-md-4">
                            <label for="complemento">Complemento</label>
                            <input type="text" class="form-control" id="complemento" placeholder="Complemento">
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-group col-md-2">
                            <label for="example-date-input">Data de Nascimento</label>
                            <input class="form-control" type="date" id="example-date-input">
                        </div>

                        <div class="form-group col-md-3">
                            <label for="sexo">Sexo</label>
                            <v-select
                                id="sexo"
                                v-model="sexoSelecionado"
                                :options="sexo"
                            ></v-select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "pessoa",

    methods: {},

    data() {
        return {
            sexo: [
                {value: 1, label: 'Masculino'},
                {value: 2, label: 'Feminino'},
            ],

            cpf: '',
            numero: null,
            sexoSelecionado: null,
            verificaRadio: null,
        }
    },
}
</script>

<style scoped>

</style>