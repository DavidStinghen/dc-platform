import json
import requests
import concurrent.futures

def checkRequest(product):
    product = json.loads(product)
    existing_images = []
    for image in product.get('images'):
        if requests.get(image).status_code == 200:
            existing_images.append(image)
        if len(existing_images) >= 3:
            break
    
    product['images'] = existing_images
    return product

def manage(dump):
    dump = open('./dump.json', 'w+')
    with concurrent.futures.ThreadPoolExecutor(max_workers=300) as executor:
        url = {executor.submit(checkRequest, prd): prd for prd in open(dump, 'r')}
        for future in concurrent.futures.as_completed(url):
            product = future.result()
            dump.write(json.dumps(product) + '\n')