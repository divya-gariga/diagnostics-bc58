kubectl config set-context --current --namespace=bc58
kubectl apply -f ../mock-server/ms.deployment.yaml
kubectl apply -f ../mock-server/ms.service.yaml
kubectl apply -f fe.deployment.yaml
kubectl apply -f fe.service.yaml
kubectl apply -f ingress.yaml

