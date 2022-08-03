<template>
<div class="q-pa-md">
    <div class="q-pa-md col-12">
      <div class="q-gutter-md sm-12" >
        <q-input
          v-model="changeLogPostModel.urlOld"
          label="Url versão anterior"
          :rules="[(val) => !!val || 'Campo obrigatório']"
        />
        <q-input
          v-model="changeLogPostModel.urlCurrent"
          label="Url versão atual"
          :rules="[(val) => !!val || 'Campo obrigatório']"
        />

        <q-btn
          class="q-mt-sm"
          label="Gerar change log"
          @click="gerar(changeLogPostModel)"
          color="primary"
        />
      </div>
    </div>
    
      <div class="q-pa-md" v-if="endpointChangeLogList.length > 0">
        <q-btn
          color="dark"
          icon-right="archive"
          label="Export to csv"
          no-caps
          @click="exportTable"
        />
        <q-list bordered class="rounded-borders">
          <q-expansion-item
            expand-separator
            v-for="item in endpointChangeLogList"
            :label="item.endpoint"
         
          >
            <q-card>
              <q-card-section>
                <div class="q-pa-md">
                  <q-table
                    title="Changes"
                    :rows="item.changes"
                    :columns="columns"
                    row-key="name"
                    :visible-columns="visibleColumns"
                  >
                  <template v-slot:top="props">
        <div class="col-2 q-table__title">Changes</div>

        <q-space />

        <div v-if="$q.screen.gt.xs" class="col">
          <q-toggle v-model="visibleColumns" val="path" label="Path" />
          <q-toggle v-model="visibleColumns" val="field" label="Field" />
          <q-toggle v-model="visibleColumns" val="description" label="Description" />
          <q-toggle v-model="visibleColumns" val="oldValue" label="Old value" />
          <q-toggle v-model="visibleColumns" val="currentValue" label="Current value" />
        </div>
        <q-select
          v-else
          v-model="visibleColumns"
          multiple
          borderless
          dense
          options-dense
          :display-value="$q.lang.table.columns"
          emit-value
          map-options
          :options="columns"
          option-value="name"
          style="min-width: 150px"
        />

        <q-btn
          flat round dense
          :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
          @click="props.toggleFullscreen"
          class="q-ml-md"
        />
      </template>
                  </q-table>


                </div>
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-list>
      </div>
    </div>
</template>

<script lang="ts">
import {
  ChangeLogPostModel,
  ChangeLogListModel,
  EndpointChangeLogListModel,
} from "components/models";
import ChangeLogListComponent from "components/ChangeLogListComponent.vue";
import { defineComponent, PropType, computed, ref, toRef, Ref } from "vue";
import { exportFile, useQuasar } from 'quasar'
import axios from "axios";
const columns = [
  { name: "path", label: "Path", field: "path" },
  { name: "field", label: "Field", field: "field" },
  { name: "description", label: "Description", field: "description" },
  { name: "oldValue", label: "Old value", field: "oldValue" },
  { name: "currentValue", label: "Current value", field: "currentValue" },
];
function groupByEndPoint(list: ChangeLogListModel[]) {
  const map = new Map();
  list.forEach((item) => {
    const key = item.endpoint;
    const collection = map.get(key);
    if (!collection) {
      map.set(key, [item]);
    } else {
      collection.push(item);
    }
  });
  return map;
}



export default defineComponent({
  name: "ChangeLogPage",
  components: { ChangeLogListComponent },
  data() {
    let endpointChangeLogList: EndpointChangeLogListModel[] = [];
    let changeLogList: ChangeLogListModel[] = [];

    return {
      changes: changeLogList,
      endpointChangeLogList: endpointChangeLogList,
    };
  },
  methods: {
    gerar(changeLog: ChangeLogPostModel) {
      axios
        .post(
          "https://change-log-yml.herokuapp.com/change-log/generate-change-log",
          changeLog
        )
        .then((response: any) => {
          this.changes = response.data.obj.changesLog;
          let resultGroup = groupByEndPoint(this.changes);
          for (let key of resultGroup.keys()) {
            this.endpointChangeLogList.push({
              endpoint: key,
              changes: resultGroup.get(key),
            });
          }
          //  this.endpointChangeLogList = groupByEndPoint(this.changes)
          console.log(response.data.obj.changesLog.length);
        })
        .catch((error: any) => console.log("Error", error.message));
    },

    exportTable () {
        // naive encoding to csv format
        let contentArray : string[]= []
        let content = ""
        contentArray.push(`endpoint;path;field;description;oldValue;currentValue`)
        this.changes.forEach(element => {
            contentArray.push(`${element.endpoint};${element.path};${element.field};${element.description};${element.oldValue};${element.currentValue}`)
        });
        content = contentArray.join('\r\n')
        const status = exportFile(
          'table-export.csv',
          content,
          'text/csv'
        )
      }
  },
  setup() {
    const changeLogPostModel: ChangeLogPostModel = {
      urlOld:
        "https://raw.githubusercontent.com/OpenBanking-Brasil/openapi/main/swagger-apis/accounts/1.0.3.yml",
      urlCurrent:
        "https://raw.githubusercontent.com/OpenBanking-Brasil/openapi/main/swagger-apis/accounts/2.0.0.yml",
    };

    return { changeLogPostModel, columns,  visibleColumns: ref([  'path', 'description', 'field' ]), };
  },
});
</script>
