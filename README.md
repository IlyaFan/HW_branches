1. Create branches on the local repos:

$ git branch Postman
$ git branch Jmeter
$ git branch CheckLists
$ git branch BugReports
$ git branch SQL
$ git branch Charles
$ git branch MobileTesting

2. Push all branches to GitHub:

$ git checkout Postman
$ git commit -m "Initial commit"
$ git push

$ git checkout Jmeter
$ git commit -m "Initial commit"
$ git push

$ git checkout CheckLists
$ git commit -m "Initial commit"
$ git push

$ git checkout BugReports
$ git commit -m "Initial commit"
$ git push

$ git checkout SQL
$ git commit -m "Initial commit"
$ git push

$ git checkout Charles
$ git commit -m "Initial commit"
$ git push

$ git checkout MobileTesting
$ git commit -m "Initial commit"
$ git push

3. Make *.txt file with bug report's structure and push to BugReports branch

$ git checkout BugReports
$ git branch
$ touch bug_report.txt
$ vim bug_report.txt
enter the text with bug report's structure

4. Push bug_report.txt to BugReports branch
$ git add .
$ git commit -m "first_commit"
$ git push

5. Merge BugReports into main

$ git checkout main
$ git merge BugReports

6. Push main branch to GitHub

$ git add .
$ git commit -m "first_commit"
$ git push

7. Make *.txt file with check list's structure and push to CheckLists branch

$ git checkout CheckLists
$ touch check_list.txt
$ vim check_list.txt
enter the text with bug report's structure

8. Push check_list.txt to CheckLists branch

$ git add .
$ git commit -m "first_commit"
$ git push

9. Create pull request on the GitHub

10. Sync local main bransh with remote main branch

$ git checkout main
$ git fetch
$ git pull
