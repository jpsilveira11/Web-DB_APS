import requests,csv,json

url = "https://api.igdb.com/v4/platforms"

#payload = "fields id,name,alternative_name,abbreviation,url;\nlimit 500;\nsort id;"
payload="fields id,name,url;\nlimit 500;\nsort id;"
headers = {
    "cookie": "__cf_bm=DGMrxIAvAMdagdjBXl38OeYjOfG0qnOoSFBr_NcB1O8-1682857774-0-ARAWHvTvr3I%2F8VezmkrdpYJOFm1kHlATuxwXnRMSerVHHx72by6cNWiRXnz%2FcTyngDFfCLLQmUvd%2BQ0rMcPAhRI%3D",
    "Client-ID": "4z2v12ldjowkh8o9yuflyvxm7ojn3e",
    "Authorization": "Bearer ej7arf8ql51mgofdmuyoo6b82g1s8d",
    "Content-Type": "text/plain"
}

def get_response(url,payload,headers):
    return requests.request("POST", url, data=payload, headers=headers)

def get_csv(data,filename=None):
    if filename==None:
        filename='Platforms.csv'
    with open(filename,'w') as file:
        writer=csv.writer(file)
        #writer.writerow(['ID','Abbreviation','Alternative Name','Name','Data','Link'])
        writer.writerow(['ID','Name','Link'])
        for instance in data:
            writer.writerow(instance.values())

def get_filename():
    filename=input('Nomeie o arquivo: (Padrão: "Platforms.csv")')
    if filename=='':
        return None
    elif not '.csv' in filename:
        filename=filename+'.csv'
        return filename

def get_list(response):
    json=response.json()
    data=[]
    for content in json:
        data.append(content)
    return data

if __name__=='__main__':
    response=get_response(url,payload,headers)
    data=get_list(response)
    filename=get_filename()

    get_csv(data,filename)