kubectl config set-context --current --namespace=bc58

kubectl set image -f ../mock-server/ms.deployment.yaml mockserver-img=ghcr.io/divya-gariga/bc58-data:$1
# kubectl apply -f ../mock-server/ms.deployment.yaml
kubectl apply -f ../mock-server/ms.service.yaml

kubectl set image -f fe.deployment.yaml frontend-img=ghcr.io/divya-gariga/bc58-fe:$1
kubectl apply -f fe.service.yaml

kubectl apply -f ingress.yaml

