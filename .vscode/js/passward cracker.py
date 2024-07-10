import subprocess
from unittest import result
data = subprocess.check_output(['netsh','wlan','show','profiles']).decode('utf-8',errors="backslashreplace").split('\n')
profile=[i.split(":")[1][1:-1] for i in data if "All user profile" in i]

for  i in profile:
   results = subprocess.check_output(['netsh','wlan','show','profiles', i, 'key=clear']).decode('utf-8',errors="backslashreplace").split('\n') ,  [b.split(":")[1][1:-1]for b in result if "Key Content" in b]
try:
                print ("{:<30}| {:<}" . format(i,""))
except IndexError:
    print("{:<}| {:<}" . format(i,"")) 
except subprocess.CalledProcessError:
        print ("{:<30}| {:<}" . format(i,"ENCODING ERROR"))
               
input("")