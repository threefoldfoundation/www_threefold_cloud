import toml
import os
import shutil

def getListOfFiles(dirName):
    # create a list of file and sub directories 
    # names in the given directory 
    listOfFile = os.listdir(dirName)
    allFiles = list()
    # Iterate over all the entries
    for entry in listOfFile:
        # Create full path
        fullPath = os.path.join(dirName, entry)
        # If entry is a directory then get the list of files in this directory 
        if os.path.isdir(fullPath):
            allFiles = allFiles + getListOfFiles(fullPath)
        else:
            allFiles.append(fullPath)
                
    return allFiles
def do():
    files = getListOfFiles("content")
    for file in files:
        if not file.endswith(".md"):
            continue

        t = ""
        start = False

        with open(file) as f:
            for line in f:
                if line.startswith("---"):
                    if not start:
                        start = True
                        continue
                    else:
                        break
                
                if line.startswith("private:"):
                    if line.replace("private:", "").strip() == "1":
                        shutil.rmtree(os.path.abspath(os.path.dirname(file)))
                    else:
                        continue
            
                



if __name__ == "__main__":
    do()