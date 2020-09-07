import argparse
import requestManager
import fileManager

parser = argparse.ArgumentParser()
parser.add_argument('dump')
arg    = parser.parse_args()
fileManager.manage(arg.dump)
requestManager.manage('./aggregator.json')
