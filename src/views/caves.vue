<template>
    <div>
        <br>

        <b-container class="bv-example-row">
            <b-row>
                <b-col>
                    <b-card bg-variant="primary" text-variant="white" header="Quick Search" class="text-center">
                        <b-card-text>
                            
                                <b-form-input
                                id="search-string"
                                aria-describedby="input-live-help input-live-feedback"
                                placeholder="Enter your Search String"
                                trim
                                size="sm" 
                                ></b-form-input>
                                <b-button >Go</b-button>
                        </b-card-text>
                    </b-card>
                </b-col>
                <b-col>
                    <b-card bg-variant="primary" text-variant="white" header="Last Updated" class="text-center">
                        <b-card-text>
                            <b-card-text>
                            Bats : 27 October 2021<br>
                            Armagedon : 17 October 2021<br>
                            Quarry Cave : 15 August 2021<br>
                        </b-card-text>
                        </b-card-text>
                    </b-card>
                </b-col>
                <b-col>
                    <b-card bg-variant="primary" text-variant="white" header="Last Visited" class="text-center">
                        <b-card-text>
                            Bats : 27 October 2021<br>
                            Armagedon : 17 October 2021<br>
                            Quarry Cave : 15 August 2021<br>
                        </b-card-text>
                    </b-card>
                </b-col>
                <b-col>
                    <b-card bg-variant="primary" text-variant="white" header="Stats" class="text-center">
                        <b-card-text>
                            Caves in Database <b-badge>486</b-badge><br>
                            Caves in South Africa <b-badge>410</b-badge><br>
                            Caves in Gauteng <b-badge>256</b-badge><br>
                        </b-card-text>
                    </b-card>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <hr>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b-table striped hover dark bordered :items="items"></b-table>
                    <b-pagination
                        aria-controls="my-table"
                        align='right'
                        >
                    </b-pagination>
                </b-col>
            </b-row>
        </b-container>

    </div>
</template>

<script>
    import { mapActions } from "vuex";
    export default {    
       name: 'Caves',
       data() {
            return {
                items: [
                    { Cave_Name: 'Bats', Area: 'Gauteng', last_visit: '13 October 2021' },
                    { Cave_Name: 'Quarry Cave', Area: 'Gauteng', last_visit: '12 October 2021' },
                    { Cave_Name: 'Broken Heart Cave', Area: 'Gauteng', last_visit: '02 January 1987' },
                ]
            }
       }, 
       methods: {
           ...mapActions(["getCave"]),
           async fetchCave() {
               try {
                   let res = await this.getCave(1)
                   console.log(res)
               } catch (e) {
                    console.error(e)
               }
           }
       }
    }
</script>