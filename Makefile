build:
	docker build -t backend ./backend
	docker build -t frontend ./frontend

apply:
	kubectl apply -f k8s/

delete:
	kubectl delete -f k8s/

logs:
	kubectl logs -l app=backend -n incident-system
