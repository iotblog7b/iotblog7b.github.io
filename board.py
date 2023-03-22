import git
import os
#with open('C:\Users\ROTIN37\Documents\Website\iotblog7b.github.io\info.txt', 'a') as "info.txt":
#    "info.txt".write('Hello\n')

with open('info.txt', 'w') as f:
    f.write('hi there\n')

repo_url = 'https://github.com/iotblog7b/iotblog7b.github.io'
repo_dir = 'local_directory'
git.Repo.clone_from(repo_url, repo_dir)
os.chdir(repo_dir)
with open('database_file.txt', 'a') as file:
    file.write('New data')
repo = git.Repo(repo_dir)
repo.git.add(update=True)
repo.index.commit("Updated database")
origin = repo.remote(name='origin')
origin.push()