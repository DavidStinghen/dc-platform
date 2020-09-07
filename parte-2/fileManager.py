import json
import tarfile
import codecs

utf8reader = codecs.getreader('utf-8')

def builProduct(productId, image):
    return {
        'productId': productId,
        'images': image
    }

def manage(dump):
    print(dump)
    tarFile           = tarfile.open(dump,encoding='utf-8')
    extractedTarFile  = tarFile.extractfile(tarFile.getmembers()[0])
    dumpExtracted     = open('extracted.json', 'w+').write(utf8reader(extractedTarFile).read())
    products          = {}
    for line in open('extracted.json'):
        product   = json.loads(line)
        productId = product.get('productId', None)
        if products.get(productId):
            products[productId].append(product.get('image'))
        else:
            products[productId] = [product.get('image')]

    finalDump = open('./aggregator.json', 'w+')
    for product in map(builProduct, products.keys(), products.values()):
        finalDump.write(json.dumps(product) + '\n')
