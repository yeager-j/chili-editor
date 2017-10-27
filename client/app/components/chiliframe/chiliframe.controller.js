import X2JS from 'x2js';

class ChiliframeController {
  constructor($soap, $sce) {
    "ngInject";
    this.$soap = $soap;
    this.$sce = $sce;
    this.x2js = new X2JS();

    this.apiKey = null;
    this.editorUrl = null;
    this.userName = '';
    this.password = '';
    this.itemID = '66c73c2c-bc01-4d13-b0ac-e82f2fa1c993';
  }

  getApiKey() {
    return this.$soap.post('http://54.227.17.122/CHILI/main.asmx', 'GenerateApiKey', {
      environmentNameOrURL: 'http://54.227.17.122/CHILI/Admin/interface.aspx',
      userName: this.userName,
      password: this.password
    }).then(response => {
      console.log('got api key');
      console.log(response);

      let apiKey = this.x2js.xml2js(response.GenerateApiKeyResult).apiKey;

      this.apiKey = apiKey._key;
    });
  }

  getEditorUrl() {
    this.getApiKey().then(() => {
      return this.$soap.post('http://54.227.17.122/CHILI/main.asmx', 'DocumentGetEditorURL', {
        apiKey: this.apiKey,
        itemID: this.itemID
      }).then(response => {
        console.log('got editor url');
        console.log(response);

        let url = this.x2js.xml2js(response.DocumentGetEditorURLResult).urlInfo;

        this.editorUrl = this.$sce.trustAsResourceUrl(url._url);
      });
    })
  }
}

export default ChiliframeController;
