import requests,csv,json

url = "https://api.igdb.com/v4/companies"

payload = "fields id,name,slug,country,created_at,description,url;\nlimit 500;\nsort id;\n"
headers = {
    "cookie": "__cf_bm=Z31NlwyDz7eiUGa9AZhsBzR4Kd5UK_xeLO6fOSF6vb0-1682867470-0-AQAQ6ZvBRRJKOKmPP10iLquIopHJkiRTnDv1ht6d6PILX5ey6TlMGrRoni4%2Fkjrj5Q0lXCg3ZLmNZ8vATxD7rhY%3D",
    "Client-ID": "4z2v12ldjowkh8o9yuflyvxm7ojn3e",
    "Authorization": "Bearer ej7arf8ql51mgofdmuyoo6b82g1s8d",
    "Content-Type": "text/plain"
}


def get_response(url,payload,headers):
    return requests.request("POST", url, data=payload, headers=headers)

def get_csv(data,filename=None):
    if filename==None:
        filename='Companies.csv'
    with open(filename,'w',encoding='utf-8') as file:
        writer=csv.writer(file)
        writer.writerow(['ID','Country','Creation','Description','Name','Slug','Link'])
        for instance in data:
            writer.writerow(instance.values())

def get_filename():
    filename=input('Nomeie o arquivo: (Padrão: "Companies.csv")')
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
print(response.text)