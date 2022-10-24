kubectl config set-context --current --namespace=bc58
kubectl apply -f ../mockserver/ms.deployment.yaml
kubectl apply -f ../mockserver/ms.service.yaml
kubectl apply -f fe.deployment.yaml
kubectl apply -f fe.service.yaml
kubectl apply -f ingress.yaml

