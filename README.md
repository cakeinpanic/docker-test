Instead of any `docker-compose` command, yyou can insert content of compose file [here](https://8gwifi.org/dc2.jsp) and run resulting comand

1. `docker build . -t katya` Here `katya` is the name of the image
2. `docker-compose up` to run the container WITH volume. You can see that content of a.txt is changed after each run
3. `docker-compose  -f docker-compose-no-volume.yaml up` to run container WITHOUT voulem. code would fail because volume not specified
4. `docker-compose  -f docker-compose-another-volume.yaml up` to run container WITH ANOTHER volume. This code would change file in `anotherfolder`



