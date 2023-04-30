import requests,csv,json

url = "https://api.igdb.com/v4/genres"

payload = "fields id,name,slug,url;\nlimit 500;\nsort id;\n"
headers = {
    "cookie": "__cf_bm=6RjkRViOQWDnglbLZP9eXHfcwU64Lu11jPN1KLunKOc-1682865695-0-AVSowZ4c49Niwsx%2B6vOgeiNXp7hBMJwkCxHGTcAKwujOTUQy%2Buolp47pfseEOH5uVQCYpSBrxK8ner1LcQ02%2BIU%3D",
    "Client-ID": "4z2v12ldjowkh8o9yuflyvxm7ojn3e",
    "Authorization": "Bearer ej7arf8ql51mgofdmuyoo6b82g1s8d",
    "Content-Type": "text/plain"
}

def get_response(url,payload,headers):
    return requests.request("POST", url, data=payload, headers=headers)

def get_csv(data,filename=None):
    if filename==None:
        filename='Genres.csv'
    with open(filename,'w') as file:
        writer=csv.writer(file)
        writer.writerow(['ID','Name','Slug','Link'])
        for instance in data:
            writer.writerow(instance.values())

def get_filename():
    filename=input('Nomeie o arquivo: (Padrão: "Genres.csv")')
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