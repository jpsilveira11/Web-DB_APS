import requests,csv,json

url = "https://api.igdb.com/v4/games"

#payload = "fields id,name,platforms,involved_companies,release_dates,genres,summary,url;\nwhere platforms=24;\nlimit 500;\nsort id;"
payload = "fields id,name,url;\nwhere platforms=19;\nlimit 500;\nsort id;"
headers = {
    "cookie": "__cf_bm=mqQ4Rr28wQ.IgvH3D5dHTkC8lpjmS.CNiUi86PkNQWk-1682868574-0-AfXaYnOpzpX%2BzvmSGGV2b1ukXRi0oVWMD0gHPuCFoZtTqJ8T3%2FCyFWNYgpJXANsa7PQZVQrIvyO%2FUnXOj0T3Kew%3D",
    "Client-ID": "4z2v12ldjowkh8o9yuflyvxm7ojn3e",
    "Authorization": "Bearer ej7arf8ql51mgofdmuyoo6b82g1s8d",
    "Content-Type": "text/plain"
}

def get_response(url,payload,headers):
    return requests.request("POST", url, data=payload, headers=headers)

def get_csv(data,filename=None):
    if filename==None:
        filename='Games.csv'
    with open(filename,'w',encoding='utf-8') as file:
        writer=csv.writer(file)
        #writer.writerow(['ID','Genres','Involved Companies','Name','Platforms','Release Dates','Summary','Link']) 
        writer.writerow(['ID','Name','Link']) 
        for instance in data:
            writer.writerow(instance.values())

def get_filename():
    filename=input('Nomeie o arquivo: (Padrão: "Games.csv")')
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

if __name__ == '__main__':
    response=get_response(url,payload,headers)
    data=get_list(response)
    filename=get_filename()

    get_csv(data,filename)